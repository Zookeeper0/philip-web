import { AccountGrid } from "@/components/molecules/AdminGrid/AccountGrid";
import { AccountSearch } from "@/components/molecules/AdminSearchBox/AccountSearch";
import * as S from "./adminAccountBox.style";

export const AdminAccountBox = () => {
  return (
    <S.AdminAccountBox>
      <AccountSearch />
      <AccountGrid />
    </S.AdminAccountBox>
  );
};
