import { useRouter } from "next/router";
import * as S from "./mobileHeader.style";
import IconBack from "public/assets/svg/icon-arrow-back.svg";
import IconUser from "public/assets/svg/icon-user.svg";
import { Button } from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import { useRecoilState, useRecoilValue } from "recoil";
import { userTokenState } from "@/recoil/userToken";
import { useState } from "react";
import { adminTokenState } from "@/recoil/adminToken";

export const MobileHeader = () => {
  const router = useRouter();
  const [userToken, setUserToken] = useRecoilState(userTokenState);
  /** 관리자 로그인 체크 */
  const [adminToken, setAdminToken] = useRecoilState(adminTokenState);
  const [popup, setPopup] = useState(false);

  const goBack = () => {
    router.back();
  };

  const popupHandler = () => {
    setPopup((prev) => !prev);
  };

  const goUser = () => {
    router.push("/auth");
  };

  return (
    <S.MobileHeader>
      <Button
        type="button"
        width="64px"
        height={64}
        color="clear"
        layout="icon"
        onClick={goBack}
      >
        <IconBack width="28px" height="28px" viewBox="0 0 24 24" />
      </Button>
      <Logo main={true} mobile={true} />
      {userToken ? (
        <>
          <Button
            type="button"
            width="64px"
            height={64}
            color="clear"
            layout="icon"
            onClick={popupHandler}
          >
            <IconUser width="18px" height="18px" viewBox="0 0 12 12" />
          </Button>
          {popup ? (
            <Button
              type="button"
              color="clear"
              layout="icon"
              size="sm"
              label="로그아웃"
              onClick={() => {
                localStorage.removeItem("kakaoSignKey");
                localStorage.removeItem("adminSignKey");
                setUserToken(null);
                setAdminToken(null);
                document.location.href = "/main";
              }}
            ></Button>
          ) : (
            ""
          )}
        </>
      ) : (
        <Button
          type="button"
          width="64px"
          height={64}
          color="clear"
          layout="icon"
          onClick={goUser}
        >
          <IconUser width="18px" height="18px" viewBox="0 0 12 12" />
        </Button>
      )}
    </S.MobileHeader>
  );
};

export default MobileHeader;
