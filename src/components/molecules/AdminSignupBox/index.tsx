import { Button } from "@/components/atoms/Button";
import * as S from "./adminSignupBox.style";

import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { signUpAPI } from "@/apis/adminApi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputDate } from "@/components/atoms/Input/InputDate";

export const AdminSignupBox = () => {
  const [loading, setLoading] = useState(false);
  const isWindowWidth = useWindowWidth();
  const router = useRouter();
  const [passwordError, setPasswordError] = useState(false);

  const schema = yup
    .object({
      adminId: yup.string().nullable().required("구분을 선택해주세요"),
      password: yup.string().nullable().required("관리명을 입력해주세요"),
      passwordCheck: yup.string().nullable().required("파일을 등록해주세요"),
      name: yup.string().nullable().required("등록일을 선택해주세요"),
      birth: yup.string().nullable().required("사용여부를 선택해주세요"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data: any) => {
    const { adminId, password, passwordCheck, name, birth } = data;
    if (password !== passwordCheck) {
      alert("비밀번호가 다릅니다.");
      return setPasswordError(true);
    }

    setLoading(true);
    signUpAPI({ adminId, password, name, birth })
      .then(() => {
        router.replace("/admin/success");
      })
      .catch((error) => {
        alert(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <S.LoginBox onSubmit={handleSubmit(submit)}>
      <S.LoginTit>간편회원가입</S.LoginTit>
      <S.IdCheckWrapper>
        <InputText
          label={isWindowWidth < 769 ? "아이디" : "아아디"}
          layout={isWindowWidth < 769 ? "column" : "column"}
          size={isWindowWidth < 769 ? "xlg" : "md"}
          width="145px"
          placeholder={isWindowWidth < 769 ? "아이디 입력" : "아이디 입력"}
          register={register("adminId")}
        />
        <Button
          type="button"
          width="45px"
          height={30}
          color="mainBg"
          layout="solid"
          label="ID확인"
        />
      </S.IdCheckWrapper>

      <InputText
        label={isWindowWidth < 769 ? "비밀번호" : "비밀번호"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "비밀번호 입력" : "비밀번호 입력"}
        register={register("password")}
      />
      <InputText
        label={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        register={register("passwordCheck")}
      />
      <InputText
        label={isWindowWidth < 769 ? "이름" : "이름"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "이름 입력" : "이름 입력"}
        register={register("name")}
      />
      <InputDate
        label={isWindowWidth < 769 ? "생년월일" : "생년월일"}
        layout={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "xlg" : "md"}
        width="190px"
        placeholder={isWindowWidth < 769 ? "생년월일 입력" : "생년월일 입력"}
        register={register("birth")}
      />
      <Button
        type="submit"
        width="100%"
        height={56}
        color="mainBg"
        layout="solid"
        label="회원가입"
      />
    </S.LoginBox>
  );
};
