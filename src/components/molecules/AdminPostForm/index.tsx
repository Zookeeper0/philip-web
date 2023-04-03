import {
  addPostApi,
  deletePreviewImagesAPI,
  uploadImagesAPI,
} from "@/apis/postsApi";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as S from "./adminPostForm.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getCategoryNavApi, getCityListApi } from "@/apis/categoryApi";
import { InputTextarea } from "@/components/atoms/Input/InputTextarea";
import { AdminInputSelect } from "@/components/atoms/Input/AdminInputSelect";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import Image from "next/image";

export const AdminPostForm = () => {
  const [cityOptions, setCityOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const router = useRouter();

  const { data: admin } = useSession();

  const mutation = useMutation("posts", addPostApi, {
    onSuccess() {
      reset();
      setImagePaths([]);
      queryClient.refetchQueries("posts");
      document.location.href = "/admin/store";
    },
    onSettled() {
      setLoading(false);
    },
  });

  /** 카테고리 select 목록 불러오기 */
  const { data: categoryItem } = useQuery(
    "getCategoryNavApi",
    getCategoryNavApi
  );

  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);

  const schema = yup
    .object({
      storeName: yup.string().nullable().required("제목을 입력해 선택해주세요"),
      address: yup.string().nullable().required("주소를 입력해주세요"),
      phoneNumber: yup.string().nullable().required("전화번호를 등록해주세요"),
      contents: yup.string().nullable().required("상세 설명을 입력해주세요"),
      categoryOid: yup.string().required("카테고리를 선택하세요"),
      cityOid: yup.string().required("도시를 선택하세요"),
      ownerName: yup.string().required("대표자명을 입력해주세요"),
      remark: yup.string(),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // const formData = new FormData();
    // imagePaths.forEach((p) => {
    //   formData.append("files", p); // req.body.files
    // });
    //방문자수 0 초기화
    data.views = 0;
    const datas = {
      files: imagePaths,
      content: data,
    };
    // formData.append("content", JSON.stringify(data));
    mutation.mutate(datas);
  };

  /** 이미지 id값에 따라 label 저장 */
  const onChangeImages = (e: any) => {
    e.preventDefault();
    console.log("e.target : ", e.target.id);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f: any) => {
      imageFormData.append("files", f);
    });
    uploadImagesAPI(imageFormData).then((result) => {
      // taeget.id 따라 label 구분해서 서버로 전송
      result.map((data: any) => (data.label = e.target.id));
      setImagePaths((prev) => prev.concat(result));
    });
  };

  /** preview 이미지 삭제 */
  const onRemoveImage = useCallback((v: any, index: number, e: any) => {
    e.preventDefault();
    deletePreviewImagesAPI(v.filename).then((result) => {
      console.log(result);
      setImagePaths((prev) => {
        return prev.filter((v, i) => {
          console.log("i, index, v", i, index, v);
          i !== index;
        });
      });
    });
  }, []);

  useEffect(() => {
    setCategoryOptions(categoryItem);
    setCityOptions(cityItem);
  }, [categoryItem, cityItem]);

  return (
    <S.PostFormBox
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <S.PostFormImgBox>
        <S.PostFormBoxTit>대표이미지 등록</S.PostFormBoxTit>
        {/* 메인페이지 대표 이미지 등록 */}
        <S.PostFormImgInput>
          <label htmlFor="thumb">
            이미지 업로드
            <input
              type="file"
              id="thumb"
              multiple
              hidden
              onChange={onChangeImages}
            />
          </label>

          {/* 이미지 미리보기 */}
          <div>
            {imagePaths.map((v: any, i) => (
              <div key={v?.filename} style={{ display: "inline-block" }}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${v?.filename}`}
                  alt={v}
                  width={200}
                  height={120}
                />
                <div>
                  <button onClick={(e) => onRemoveImage(v, i, e)}>제거</button>
                </div>
              </div>
            ))}
          </div>
        </S.PostFormImgInput>
      </S.PostFormImgBox>
      <S.PostFormInfoBox>
        <S.PostFormBoxTit>업체정보 등록</S.PostFormBoxTit>
        {/* 임시 상세이미지 버튼 (feat. 동주) */}
        <label htmlFor="detail">
          이미지 업로드
          <input
            type="file"
            id="detail"
            multiple
            hidden
            onChange={onChangeImages}
          />
        </label>

        <AdminInputSelect
          label="지역선택"
          layout="column"
          themeType="admin"
          size="md"
          options={cityOptions}
          register={register("cityOid")}
        />
        <AdminInputSelect
          label="카테고리 선택"
          layout="column"
          themeType="admin"
          size="md"
          options={categoryOptions}
          register={register("categoryOid")}
        />
        <InputText
          label="상호명"
          layout="column"
          themeType="admin"
          size="md"
          width="100%"
          placeholder="입력..."
          register={register("storeName")}
        />
        <InputText
          label="대표자명"
          layout="column"
          themeType="admin"
          size="md"
          width="100%"
          placeholder="입력..."
          register={register("ownerName")}
        />
        <InputText
          label="주소"
          layout="column"
          themeType="admin"
          size="md"
          width="100%"
          placeholder="입력..."
          register={register("address")}
        />
        <InputText
          label="대표 전화번호"
          layout="column"
          themeType="admin"
          size="md"
          width="100%"
          placeholder="입력..."
          register={register("phoneNumber")}
        />
        <InputTextarea
          label="요금 및 메뉴설명"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          placeholder="내용을 입력해 주세요."
          register={register("contents")}
        />
        {/* 요금 및 메뉴설명에 대한 이미지 등록 */}
        <S.PostFormImgInput>
          <label htmlFor="menu">
            이미지 업로드
            <input
              type="file"
              id="menu"
              multiple
              hidden
              onChange={onChangeImages}
            />
          </label>
        </S.PostFormImgInput>
        <InputText
          label="비고"
          layout="column"
          themeType="admin"
          size="md"
          width="100%"
          placeholder="입력..."
          register={register("remark")}
        />
      </S.PostFormInfoBox>

      <S.PostFormBtnBox>
        <ButtonGroup>
          <Button
            type="submit"
            color="primary"
            layout="solid"
            width="80px"
            height={40}
            label="등록"
          />
          <Button
            type="button"
            color="func"
            layout="solid"
            width="80px"
            height={40}
            label="취소"
            onClick={() => router.back()}
          />
        </ButtonGroup>
      </S.PostFormBtnBox>
    </S.PostFormBox>
  );
};
