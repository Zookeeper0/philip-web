import Logo from "@/components/atoms/Logo";
import { HeaderMenu } from "@/components/molecules/HeaderMenu";
import { tokenState } from "@/recoil/token";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as S from "./header.style";

export const Header = () => {
  /** 사용자 인증 로컬 저장 ( 임시 )  */
  const [token, setToken]: any = useRecoilState(tokenState);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("signKey") || "{}");
    setToken(userInfo.accessToken);
  }, [setToken]);

  console.log("userInfo!!", token);

  return (
    <S.Header>
      <S.HeaderRow>
        <Logo main={true} />
        <HeaderMenu />
      </S.HeaderRow>
    </S.Header>
  );
};

export default Header;
