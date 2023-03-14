import { Button } from "@/components/atoms/Button";
import * as S from "./adminSignupBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { signUpAPI } from "@/apis/userApi";

export const AdminSignupBox = () => {
  const [loading, setLoading] = useState(false);
  const isWindowWidth = useWindowWidth();
  const router = useRouter();
  const [passwordError, setPasswordError] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const submit = useCallback((data: any) => {
    console.log(data);
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
  }, []);

  return (
    <S.LoginBox onSubmit={handleSubmit(submit)}>
      <S.LoginTit>간편회원가입</S.LoginTit>
      <S.IdCheckWrapper>
        <InputText
          label={isWindowWidth < 769 ? "아이디" : "아아디"}
          themeType={isWindowWidth < 769 ? "column" : "column"}
          size={isWindowWidth < 769 ? "lg" : "md"}
          width="100%"
          placeholder={isWindowWidth < 769 ? "아이디 입력" : "아이디 입력"}
          register={register("adminId")}
        />
        <Button
          type="button"
          width="20%"
          height={30}
          color="mainBg"
          layout="solid"
          label="ID확인"
        />
      </S.IdCheckWrapper>

      <InputText
        label={isWindowWidth < 769 ? "비밀번호" : "비밀번호"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "비밀번호 입력" : "비밀번호 입력"}
        register={register("password")}
      />
      <InputText
        label={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "비밀번호확인" : "비밀번호확인"}
        register={register("passwordCheck")}
      />
      <InputText
        label={isWindowWidth < 769 ? "이름" : "이름"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
        placeholder={isWindowWidth < 769 ? "이름 입력" : "이름 입력"}
        register={register("name")}
      />
      <InputText
        label={isWindowWidth < 769 ? "생년월일" : "생년월일"}
        themeType={isWindowWidth < 769 ? "column" : "column"}
        size={isWindowWidth < 769 ? "lg" : "md"}
        width="100%"
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
