import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { userTokenState } from "@/recoil/userToken";
import { useRouter } from "next/router";
import IconUser from "public/assets/svg/icon-user.svg";
import { useRecoilState } from "recoil";
import * as S from "./headerMenu.style";

export const HeaderMenu = () => {
  const router = useRouter();
  const pageOptions = [
    {
      id: 1,
      name: "앙헬레스",
    },
    {
      id: 2,
      name: "마닐라",
    },
    {
      id: 3,
      name: "세부",
    },
  ];

  /** 관리자 로그인 되어있는지 체크 */
  const [userToken, setUserToken] = useRecoilState(userTokenState);

  console.log("header userTOken", userToken);
  return (
    <S.HeaderMenu>
      {userToken ? (
        <>
          <Button
            type="button"
            color="clear"
            layout="icon"
            size="sm"
            label="로그아웃"
            onClick={() => {
              localStorage.removeItem("kakaoSignKey");
              router.reload();
            }}
          >
            <IconUser />
          </Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            color="clear"
            layout="icon"
            size="sm"
            label="로그인/회원가입"
            onClick={() => {
              router.replace("/auth");
            }}
          >
            <IconUser />
          </Button>
        </>
      )}
      {/* 임시 */}

      {router.pathname.includes("main") || router.pathname.includes("auth") ? (
        <InputSelect
          label="지역선택"
          options={pageOptions}
          themeType="row"
          size="sm"
        />
      ) : (
        ""
      )}
    </S.HeaderMenu>
  );
};
