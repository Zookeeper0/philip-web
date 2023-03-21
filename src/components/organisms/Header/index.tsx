import Logo from "@/components/atoms/Logo";
import { HeaderMenu } from "@/components/molecules/HeaderMenu";
import { adminTokenState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as S from "./header.style";

export const Header = () => {
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
