import { AccountGrid } from "@/components/molecules/AdminGrid/AccountGrid";
import { AccountSearch } from "@/components/molecules/AdminSearchBox/AccountSearch";
import { useState } from "react";
import * as S from "./adminAccountBox.style";

export const AdminAccountBox = () => {
  const [adminSearchKeyword, setAdminSearchKeyword] = useState("");

  return (
    <S.AdminAccountBox>
      <AccountSearch setAdminSearchKeyword={setAdminSearchKeyword} />
      <AccountGrid adminSearchKeyword={adminSearchKeyword} />
    </S.AdminAccountBox>
  );
};
