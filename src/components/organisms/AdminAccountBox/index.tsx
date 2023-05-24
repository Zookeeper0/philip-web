import { AccountGrid } from "@/components/molecules/AdminGrid/AccountGrid";
import { AccountSearch } from "@/components/molecules/AdminSearchBox/AccountSearch";
import { useState } from "react";
import * as S from "./adminAccountBox.style";

interface AdminAccountBoxProps {
  setAdminSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  adminSearchKeyword: string;
  dataSource: [];
  openAccountModal: (data: any) => void;
  accountModal: boolean;
  account: any;
}

export const AdminAccountBox = ({
  setAdminSearchKeyword,
  adminSearchKeyword,
  dataSource,
  openAccountModal,
  accountModal,
  account,
}: AdminAccountBoxProps) => {
  return (
    <S.AdminAccountBox>
      <AccountSearch setAdminSearchKeyword={setAdminSearchKeyword} />
      <AccountGrid
        adminSearchKeyword={adminSearchKeyword}
        dataSource={dataSource}
        openAccountModal={openAccountModal}
        accountModal={accountModal}
        account={account}
      />
    </S.AdminAccountBox>
  );
};
