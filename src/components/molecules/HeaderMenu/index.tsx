import { getCityListApi } from "@/apis/categoryApi";
import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { adminTokenState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { useRouter } from "next/router";
import IconUser from "public/assets/svg/icon-user.svg";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import * as S from "./headerMenu.style";

export const HeaderMenu = () => {
  /** 유저 로그인 체크 */
  const [userToken, setUserToken] = useRecoilState(userTokenState);
  /** 관리자 로그인 체크 */
  const [adminToken, setAdminToken] = useRecoilState(adminTokenState);
  const [cityOptions, setCityOptions] = useState([]);

  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);

  const router = useRouter();

  useEffect(() => {
    setCityOptions(cityItem);
  }, [cityItem]);

  console.log("city:", cityItem);

  return (
    <S.HeaderMenu>
      {userToken || adminToken ? (
        <>
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
      {adminToken ? (
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
        />
      ) : (
        ""
      )}
    </S.HeaderMenu>
  );
};
