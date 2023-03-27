import { Button } from "@/components/atoms/Button";
import * as S from "./adminLoginBox.style";
import IconKakao from "public/assets/svg/icon-kakao.svg";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { logInAPI } from "@/apis/adminApi";
import { useRecoilState } from "recoil";
import { adminTokenState } from "@/recoil/adminToken";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";

export const AdminLoginBox = () => {
  const isWindowWidth = useWindowWidth();
  const router = useRouter();
  const [adminToken, setAdminToken] = useRecoilState(adminTokenState);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const mutation = useMutation("logInAPI", logInAPI, {
    onSuccess: (token) => {
      localStorage.setItem("adminSignKey", token.accessToken);
      localStorage.setItem("adminOid", token.oid);

      setAdminToken(token);
      document.location.href = "/main";
    },
    onError: (error: any) => {
      console.log(error);
      const { response } = error;
      alert(response.data.message);
    },
  });

  const onSubmitForm = useCallback(
    (data: any) => {
      const { adminId, password } = data;
      mutation.mutate({ adminId, password });
    },
    [mutation]
  );

  return (
    <S.AdminLoginBox onSubmit={handleSubmit(onSubmitForm)}>
      <S.LoginTit>관리자 로그인</S.LoginTit>
      <S.LoginInputBox>
        <InputText
          label="아이디"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          placeholder="아이디 입력"
          register={register("adminId")}
        />
        <InputText
          label="비밀번호"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          placeholder="비밀번호 입력"
          register={register("password")}
        />
        <InputCheckbox
          value="1"
          themeType="admin"
          layout="row"
          displayValue="아이디 저장"
        />
      </S.LoginInputBox>
      <Button
        type="submit"
        width="100%"
        height={56}
        color="primary"
        layout="solid"
        label="로그인하기"
      />
      {/* <Button
        type="button"
        width="100%"
        height={56}
        color="mainBg"
        layout="solid"
        label="간편 회원가입"
        onClick={() => {
          router.replace("/admin/signup");
        }}
      /> */}
    </S.AdminLoginBox>
  );
};
