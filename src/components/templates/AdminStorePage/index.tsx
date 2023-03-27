import * as S from "./adminStorePage.style";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";

export const AdminStorePage = () => {
  return (
    <AdminLayout>
      <S.AdminStorePage>{/* <AdminPostForm /> */}</S.AdminStorePage>
    </AdminLayout>
  );
};
