import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import * as S from "./adminPostPage.style";

export const AdminPostPage = () => {
  return (
    <AdminLayout title="업체 신규등록">
      <S.adminPostPage>
        <AdminPostForm />
      </S.adminPostPage>
    </AdminLayout>
  );
};
