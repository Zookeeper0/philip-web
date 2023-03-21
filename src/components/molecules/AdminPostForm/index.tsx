import { addPostApi } from "@/apis/postsApi";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as S from "./adminPostForm.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { useRecoilValue } from "recoil";
import { adminTokenState } from "@/recoil/adminToken";
import { getCategoryNavApi, getCityListApi } from "@/apis/categoryApi";

interface PostdataProps {
  title: string;
  address: string;
  phoneNumber: string;
  contents: string;
}
export const AdminPostForm = () => {
  const isWindowWidth = useWindowWidth();
  const userOid = useRecoilValue(adminTokenState);
  const [cityOptions, setCityOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const mutation = useMutation("posts", addPostApi, {
    onSuccess() {
      reset();
      setImagePaths([]);
      queryClient.refetchQueries("posts");
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

  // const schema = yup
  //   .object({
  //     title: yup.string().nullable().required("제목을 입력해 선택해주세요"),
  //     address: yup.string().nullable().required("주소를 입력해주세요"),
  //     phoneNumber: yup.string().nullable().required("전화번호를 등록해주세요"),
  //     contents: yup.string().nullable().required("상세 설명을 입력해주세요"),
  //     categoryOid: yup.string().required("카테고리를 선택하세요"),
  //     cityOid: yup.string().required("도시를 선택하세요"),
  //   })
  //   .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const formData = new FormData();
    images.forEach((p) => {
      formData.append("files", p);
    });

    //어드민 토큰
    data.token = userOid;
    //방문자수 0 초기화
    data.views = 0;
    formData.append("content", JSON.stringify(data));
    mutation.mutate(formData);
  };

  // ref로 인풋태그 접근
  const imageInput = useRef<HTMLInputElement>(null);
  const onClickImageUpload = useCallback((e: any) => {
    e.preventDefault();
    imageInput.current?.click();
  }, []);

  /** 이미지 정보 state 저장 */
  const onChangeImages = useCallback((e: any) => {
    [].forEach.call(e.target.files, (f) => {
      setImages((prev) => prev.concat(f));
    });
  }, []);

  const onRemoveImage = useCallback(
    (index: number) => () => {
      setImagePaths((prev) => {
        return prev.filter((v, i) => i !== index);
      });
    },
    []
  );

  useEffect(() => {
    setCategoryOptions(categoryItem);
    setCityOptions(cityItem);
  }, [categoryItem, cityItem]);

  return (
    <S.PostFormBox
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <S.PostFormTit>관리자페이지</S.PostFormTit>
      <InputSelect
        label="지역선택"
        options={categoryOptions}
        themeType="row"
        size="sm"
        register={register("categoryOid")}
      />
      <InputSelect
        label="지역선택"
        options={cityOptions}
        themeType="row"
        size="sm"
        register={register("cityOid")}
      />
      <InputText
        label={isWindowWidth < 769 ? "제목" : "제목"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "title" : "title"}
        register={register("title")}
      />
      <InputText
        label={isWindowWidth < 769 ? "주소" : "주소"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "address" : "address"}
        register={register("address")}
      />
      <InputText
        label={isWindowWidth < 769 ? "전화번호" : "전화번호"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "phoneNumber" : "phoneNumber"}
        register={register("phoneNumber")}
      />
      <InputText
        label={isWindowWidth < 769 ? "컨텐츠" : "컨텐츠"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "contents" : "contents"}
        register={register("contents")}
      />

      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
        <button type="submit" style={{ float: "right" }}>
          등록
        </button>
      </div>
    </S.PostFormBox>
  );
};
