import { AdminLayout } from "@/components/organisms/AdminLayout";
import * as S from "./adminAccountPage.style";

export const AdminAccountPage = () => {
  return (
    <AdminLayout title="관리자 설정">
      <S.AdminAccountPage>관리자 설정 페이지</S.AdminAccountPage>
    </AdminLayout>
  );
};
