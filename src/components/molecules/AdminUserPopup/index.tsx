import { UserPopupItem } from "@/components/atoms/UserPopupItem";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./adminUserBox.style";

export const AdminUserPopup = () => {
  const router = useRouter();
  const signOutHandler = () => {
    signOut({ redirect: true, callbackUrl: "/admin/login" });
  };
  return (
    <S.AdminUserPopup>
      <UserPopupItem>
        <Link href="/main">
          <span>홈으로 가기</span>
        </Link>
      </UserPopupItem>
      <UserPopupItem>
        <span onClick={signOutHandler}>로그아웃</span>
      </UserPopupItem>
    </S.AdminUserPopup>
  );
};
