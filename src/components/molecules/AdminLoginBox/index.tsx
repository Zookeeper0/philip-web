import { Button } from "@/components/atoms/Button";
import * as S from "./adminLoginBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";

export const AdminLoginBox = () => {
  const isWindowWidth = useWindowWidth();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const [userInfo, setUserInfo] = useState({ adminId: "", password: "" });

  const onSubmitForm = async (e: any) => {
    // validate your userinfo
    e.preventDefault();

    // redirect : true => callbackUrl 설정할려면
    const response = await signIn("credentials", {
      adminId: userInfo.adminId,
      password: userInfo.password,
      redirect: false,
    });

    if (response?.error) {
      setErrorMessage(response?.error);
    }

    if (response?.ok === true) {
      router.push("/main");
    }
    console.log("response", response);
  };

  return (
    <S.AdminLoginBox onSubmit={onSubmitForm}>
      <S.LoginTit>Login</S.LoginTit>
      <S.LoginInputBox>
        <InputText
          label="아이디"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          type={"text"}
          placeholder="아이디 입력"
          value={userInfo.adminId}
          onChange={({ target }: any) =>
            setUserInfo({ ...userInfo, adminId: target.value })
          }
        />
        <InputText
          label="비밀번호"
          layout="column"
          themeType="admin"
          size="lg"
          width="100%"
          type={"password"}
          placeholder="비밀번호 입력"
          value={userInfo.password}
          onChange={({ target }: any) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
        <InputCheckbox
          value="1"
          themeType="admin"
          layout="row"
          displayValue="아이디 저장"
        />
      </S.LoginInputBox>
      {errorMessage && <span className="error-msg-mobile">{errorMessage}</span>}
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
