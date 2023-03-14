import { addPostApi, uploadImagesApi } from "@/apis/postsApi";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import React, { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import * as S from "./adminPostForm.style";

export const AdminPostForm = () => {
  const isWindowWidth = useWindowWidth();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const queryClient = useQueryClient();
  //   const { data: me } = useQuery("user", loadMyInfoAPI);
  const [loading, setLoading] = useState(false);
  // const { imagePaths, addPostDone } = useSelector((state) => state.post);
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

  const onSubmit = useCallback(
    (data: any) => {
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append("image", p);
      });
      formData.append("content", data);
      mutation.mutate(formData);
    },
    [mutation, imagePaths]
  );

  // ref로 인풋태그 접근
  const imageInput = useRef<HTMLInputElement>(null);
  const onClickImageUpload = useCallback(() => {
    imageInput.current?.click();
  }, []);

  const onChangeImages = useCallback((e: any) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("file", f);
    });
    uploadImagesApi(imageFormData).then((result) => {
      setImagePaths((prev) => prev.concat(result));
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

  return (
    <S.PostFormBox
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <S.PostFormTit>관리자페이지</S.PostFormTit>

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

      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={`http://localhost:3001/${v}`}
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <button onClick={onRemoveImage(i)}>제거</button>
            </div>
          </div>
        ))}
      </div>
    </S.PostFormBox>
  );
};
