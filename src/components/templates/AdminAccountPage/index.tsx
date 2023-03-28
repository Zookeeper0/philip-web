import { AdminAccountBox } from "@/components/organisms/AdminAccountBox";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import * as S from "./adminAccountPage.style";

export const AdminAccountPage = () => {
  return (
    <AdminLayout title="관리자 설정">
      <S.AdminAccountPage>
        <AdminAccountBox />
      </S.AdminAccountPage>
    </AdminLayout>
  );
};
