import { UserGrid } from "@/components/molecules/AdminGrid/UserGrid";
import { UserSearch } from "@/components/molecules/AdminSearchBox/UserSearch";
import * as S from "./adminUserBox.style";
import { useState } from "react";

export const AdminUserBox = () => {
  const [userSearchKeyword, setUserSearchKeyword] = useState("");
  return (
    <S.AdminUserBox>
      <UserSearch setUserSearchKeyword={setUserSearchKeyword} />
      <UserGrid userSearchKeyword={userSearchKeyword} />
    </S.AdminUserBox>
  );
};
