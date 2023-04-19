import * as S from "./adminStorePage.style";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import { AdminStoreBox } from "@/components/organisms/AdminStoreBox";
import { useSession } from "next-auth/react";

export const AdminStorePage = () => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <AdminLayout title="업체관리" link="store/post" linkLabel="신규등록">
      <S.AdminStorePage>
        <AdminStoreBox />
      </S.AdminStorePage>
    </AdminLayout>
  );
};
