import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { useRouter } from "next/router";
import IconUser from "public/assets/svg/icon-user.svg";
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

  return (
    <S.HeaderMenu>
      {/* 임시 */}
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
      {/* 임시 */}
      <Button
        type="button"
        color="clear"
        layout="icon"
        size="sm"
        label="관리자 로그인/회원가입"
        onClick={() => {
          router.replace("/admin/login");
        }}
      >
        <IconUser />
      </Button>

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
