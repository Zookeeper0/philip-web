import { Button } from "@/components/atoms/Button";
import * as S from "./loginBox.style";
import IconKakao from "public/assets/svg/icon-kakao.svg";

export const LoginBox = () => {
  return (
    <S.LoginBox>
      <S.LoginTit>Login</S.LoginTit>
      <Button
        type="button"
        width="100%"
        height={56}
        color="kakaoBg"
        layout="solid"
        label="카카오톡으로 로그인하기"
      >
        <IconKakao />
      </Button>
    </S.LoginBox>
  );
};
