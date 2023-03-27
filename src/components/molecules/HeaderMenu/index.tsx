import { getCityListApi } from "@/apis/categoryApi";
import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { adminTokenState } from "@/recoil/adminToken";
import { cityState } from "@/recoil/city";
import { userTokenState } from "@/recoil/userToken";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import IconUser from "public/assets/svg/icon-user.svg";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./headerMenu.style";

export const HeaderMenu = () => {
  /** 유저 로그인 체크 */
  const [userToken, setUserToken] = useRecoilState(userTokenState);
  /** 관리자 로그인 체크 */
  const [adminToken, setAdminToken] = useRecoilState(adminTokenState);
  const [cityOptions, setCityOptions] = useState([]);

  const [city, setCityState] = useRecoilState<any>(cityState);

  const { data: session } = useSession();

  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);

  const router = useRouter();

  /** 시티 목록 선택시 세팅 */
  const getCityOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCityState(e.target.value);
    // 새로 고침 시 선택 city 유지
    localStorage.setItem("city", e.target.value);
  };

  const onLogout = () => {
    localStorage.removeItem("kakaoSignKey");
    localStorage.removeItem("adminSignKey");
    localStorage.removeItem("adminOid");
    setUserToken(null);
    setAdminToken(null);
    document.location.href = "/main";
  };

  useEffect(() => {
    setCityOptions(cityItem);
  }, [cityItem]);

  return (
    <S.HeaderMenu>
      {userToken || session?.user ? (
        <>
          <Button
            type="button"
            color="clear"
            layout="icon"
            size="sm"
            label="로그아웃"
            onClick={() => {
              signOut(), onLogout();
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
      {/* 관리자 로그인 시 글쓰기 버튼 */}
      {session?.user ? (
        <>
          <Button
            type="button"
            color="clear"
            layout="icon"
            size="sm"
            label="관리자 글쓰기"
            onClick={() => {
              router.replace("/admin");
            }}
          >
            <IconUser />
          </Button>
        </>
      ) : (
        ""
      )}
      {router.pathname.includes("main") || router.pathname.includes("auth") ? (
        <InputSelect
          label="지역선택"
          options={cityOptions}
          themeType="row"
          size="sm"
          onChange={getCityOption}
          value={city}
        />
      ) : (
        ""
      )}
    </S.HeaderMenu>
  );
};
