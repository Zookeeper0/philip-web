import { AdminLayout } from "@/components/organisms/AdminLayout";
import * as S from "./adminUserPage.style";

export const AdminUserPage = () => {
  return (
    <AdminLayout title="회원관리">
      <S.AdminUserPage>회원관리</S.AdminUserPage>
    </AdminLayout>
  );
};
