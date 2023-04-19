import {
  deleteImageAPI,
  deletePreviewImagesAPI,
  editPostAPI,
  getOnePostInfoApi,
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

import { InputFile } from "@/components/atoms/Input/InputFile";

export const AdminEditForm = () => {
  const router = useRouter();

  /** 업체 상세정보 불러오기 */
  const queryFn = () => getOnePostInfoApi(router.query.id);
  const { data: detailItem, isError } = useQuery(
    ["detailItem", router.query.id],
    queryFn
  );

  const [cityOptions, setCityOptions] = useState<any>();
  const [categoryOptions, setCategoryOptions] = useState<any>();

  const [imagePaths, setImagePaths] = useState<string[]>([]);

  const [newThumbImages, setNewThumbImages] = useState<any>([]);
  const [newDetailImages, setNewDetailImages] = useState<any>([]);
  const [newMenuImages, setNewMenuImages] = useState<any>([]);

  const [thumbImages, setThumbImages] = useState<string[]>(detailItem?.thumb);
  const [detailImages, setDetailImages] = useState<string[]>(
    detailItem?.detail
  );
  const [menuImages, setMenuImages] = useState<string[]>(detailItem?.menu);

  /** 수정 저장 api */
  const mutation = useMutation("editPostAPI", editPostAPI, {
    onSuccess() {
      reset();
      setImagePaths([]);
      router.replace("/admin/store");
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

  const { handleSubmit, register, reset } = useForm({
    defaultValues: detailItem,
    resolver: yupResolver(schema),
  });

  /** 수정 저장  */
  const onSubmit = (data: any) => {
    const datas = {
      files: imagePaths,
      content: data,
    };
    mutation.mutate(datas);
  };

  /** 이미지 id값에 따라 label 저장 */
  const onChangeImages = (e: any) => {
    e.preventDefault();
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f: any) => {
      imageFormData.append("files", f);
    });
    uploadImagesAPI(imageFormData).then((result) => {
      // taeget.id 따라 label 구분해서 서버로 전송
      result.map((data: any) => (data.label = e.target.id));
      if (e.target.id === "thumb") {
        setNewThumbImages((prev: any) => prev.concat(result));
        setImagePaths((prev) => prev.concat(result));
      } else if (e.target.id === "detail") {
        setNewDetailImages((prev: any) => prev.concat(result));
        setImagePaths((prev) => prev.concat(result));
      } else {
        setNewMenuImages((prev: any) => prev.concat(result));
        setImagePaths((prev) => prev.concat(result));
      }
    });
  };

  /** Thumb 이미지 삭제 */
  const onRemoveThumb = useCallback((v: any, e: any) => {
    e.preventDefault();
    deleteImageAPI(v.oid).then((result) => {
      setThumbImages((imges) => {
        return imges.filter((img: any) => img.oid !== v.oid);
      });
    });
  }, []);

  /** Detail 이미지 삭제 */
  const onRemoveDetail = useCallback((v: any, e: any) => {
    e.preventDefault();
    deleteImageAPI(v.oid).then((result) => {
      setDetailImages((imges) => {
        return imges.filter((img: any) => img.oid !== v.oid);
      });
    });
  }, []);

  /** Menu 이미지 삭제 */
  const onRemoveMenu = useCallback((v: any, e: any) => {
    e.preventDefault();
    deleteImageAPI(v.oid).then((result) => {
      setMenuImages((imges) => {
        return imges.filter((img: any) => img.oid !== v.oid);
      });
    });
  }, []);

  /** 새로운 이미지 추가 된후 삭제버튼 preview 이미지 삭제 */
  const onRemoveImage = useCallback((v: any, index: number, e: any) => {
    e.preventDefault();
    deletePreviewImagesAPI(v.filename).then((result) => {
      if (v.label === "thumb") {
        setNewThumbImages((imges: any) => {
          return imges.filter((img: any) => img.filename !== v.filename);
        });
      } else if (v.label === "detail") {
        setNewDetailImages((imges: any) => {
          return imges.filter((img: any) => img.filename !== v.filename);
        });
      } else {
        setNewMenuImages((imges: any) => {
          return imges.filter((img: any) => img.filename !== v.filename);
        });
      }
    });
  }, []);

  useEffect(() => {
    setCategoryOptions(categoryItem);
    setCityOptions(cityItem);
    reset(detailItem);

    setThumbImages(detailItem?.thumb);
    setDetailImages(detailItem?.detail);
    setMenuImages(detailItem?.menu);
  }, [categoryItem, cityItem, detailItem]);

  return (
    <S.PostFormBox
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <S.PostFormImgBox>
        <S.PostFormBoxTit>대표이미지 등록</S.PostFormBoxTit>
        {/* 메인페이지 대표 이미지 등록 */}
        <S.PostFormImgInput>
          <InputFile
            id="thumb"
            onChangeImages={onChangeImages}
            onRemoveImage={onRemoveImage}
            onRemoveServerImage={onRemoveThumb}
            imgPreview={newThumbImages}
            imageFromDB={thumbImages}
          />
        </S.PostFormImgInput>
        <S.PostFormBoxTit>상세이미지 등록</S.PostFormBoxTit>
        {/* 상세이미지 등록 */}
        <S.PostFormImgInput>
          <InputFile
            id="detail"
            onChangeImages={onChangeImages}
            onRemoveImage={onRemoveImage}
            onRemoveServerImage={onRemoveDetail}
            imgPreview={newDetailImages}
            imageFromDB={detailImages}
          />
        </S.PostFormImgInput>
        <S.PostFormBoxTit>메뉴이미지 등록</S.PostFormBoxTit>
        {/* 메뉴이미지 등록 */}
        <S.PostFormImgInput>
          <InputFile
            id="menu"
            onChangeImages={onChangeImages}
            onRemoveImage={onRemoveImage}
            onRemoveServerImage={onRemoveMenu}
            imgPreview={newMenuImages}
            imageFromDB={menuImages}
          />
        </S.PostFormImgInput>
      </S.PostFormImgBox>
      <S.PostFormInfoBox>
        <S.PostFormBoxTit>업체정보 등록</S.PostFormBoxTit>
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
            label="저장"
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
