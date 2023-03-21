import { Button } from "@/components/atoms/Button";
import * as S from "./loginBox.style";
import IconKakao from "public/assets/svg/icon-kakao.svg";
import Link from "next/link";
import { KAKAO_AUTH_URL } from "@/config/OAuth";

export const LoginBox = () => {
  const kakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
    });
  };

  return (
    <S.LoginBox>
      <Button
        type="button"
        width="100%"
        height={56}
        color="kakaoBg"
        layout="solid"
        label="카카오톡으로 로그인하기"
        onClick={kakaoLogin}
      >
        <IconKakao />
      </Button>
    </S.LoginBox>
  );
};
