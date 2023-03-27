import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getCityListApi } from "@/apis/categoryApi";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { adminTokenState } from "@/recoil/adminToken";
import { userTokenState } from "@/recoil/userToken";
import { Button } from "@/components/atoms/Button";
import * as S from "./headerMenu.style";
import IconUser from "public/assets/svg/icon-user.svg";

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

  return (
    <S.HeaderMenu>
      {/* 관리자 페이지 이동 버튼 */}
      {adminToken && (
        <>
          <Button
            type="button"
            color="clear"
            layout="icon"
            size="sm"
            label="관리자 페이지"
            onClick={() => {
              router.replace("/admin");
            }}
          ></Button>
        </>
      )}

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
      {router.pathname.includes("main") || router.pathname.includes("auth") ? (
        <InputSelect
          label="지역선택"
          options={cityOptions}
          layout="row"
          size="sm"
        />
      ) : (
        ""
      )}
    </S.HeaderMenu>
  );
};
