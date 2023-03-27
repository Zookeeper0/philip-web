import * as S from "./adminStorePage.style";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";

export const AdminStorePage = () => {
  return (
    <AdminLayout title="업체관리" link="store/post" linkLabel="신규등록">
      <S.AdminStorePage></S.AdminStorePage>
    </AdminLayout>
  );
};
