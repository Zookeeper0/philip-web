import { AdminAccountBox } from "@/components/organisms/AdminAccountBox";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import * as S from "./adminAccountPage.style";

interface AdminAccountPageProps {
  setAdminSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  adminSearchKeyword: string;
  dataSource: [];
  openAccountModal: (data: any) => void;
  accountModal: boolean;
  account: any;
}

export const AdminAccountPage = ({
  setAdminSearchKeyword,
  adminSearchKeyword,
  dataSource,
  openAccountModal,
  accountModal,
  account,
}: AdminAccountPageProps) => {
  return (
    <AdminLayout title="관리자 설정">
      <S.AdminAccountPage>
        <AdminAccountBox
          setAdminSearchKeyword={setAdminSearchKeyword}
          adminSearchKeyword={adminSearchKeyword}
          dataSource={dataSource}
          openAccountModal={openAccountModal}
          accountModal={accountModal}
          account={account}
        />
      </S.AdminAccountPage>
    </AdminLayout>
  );
};
