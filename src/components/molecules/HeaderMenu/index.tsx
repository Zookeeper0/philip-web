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
      name: "마닐라",
    },
    {
      id: 2,
      name: "앙헬레스",
    },
    {
      id: 3,
      name: "세부",
    },
  ];

  return (
    <S.HeaderMenu>
      <Button
        type="button"
        color="clear"
        layout="icon"
        size="sm"
        label="로그인/회원가입"
        onClick={() => {
          router.replace("/login");
        }}
      >
        <IconUser />
      </Button>
      {router.pathname.includes("main") && (
        <InputSelect
          label="지역선택"
          options={pageOptions}
          themeType="row"
          size="sm"
        />
      )}
    </S.HeaderMenu>
  );
};
