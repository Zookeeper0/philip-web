import { Button } from "@/components/atoms/Button";
import * as S from "./adminHeader.style";
import IconUser from "public/assets/svg/icon-user.svg";
import { signOut } from "next-auth/react";

export const AdminHeader = () => {
  return (
    <S.AdminHeader>
      <Button
        type="button"
        color="adminClear"
        layout="icon"
        size="md"
        label="관리자 님"
      >
        <IconUser />
      </Button>
      <Button
        type="button"
        color="adminClear"
        layout="icon"
        size="md"
        label="로그아웃"
        onClick={() => signOut()}
      />
    </S.AdminHeader>
  );
};
