import { UserGrid } from "@/components/molecules/AdminGrid/UserGrid";
import { UserSearch } from "@/components/molecules/AdminSearchBox/UserSearch";
import * as S from "./adminUserBox.style";

export const AdminUserBox = () => {
  return (
    <S.AdminUserBox>
      <UserSearch />
      <UserGrid />
    </S.AdminUserBox>
  );
};
