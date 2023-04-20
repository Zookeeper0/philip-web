import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminUserBox } from "@/components/organisms/AdminUserBox";
import * as S from "./adminUserPage.style";

export const AdminUserPage = () => {
  return (
    <AdminLayout title="회원관리">
      <S.AdminUserPage>
        <AdminUserBox />
      </S.AdminUserPage>
    </AdminLayout>
  );
};
