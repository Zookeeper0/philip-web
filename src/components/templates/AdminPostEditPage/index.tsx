import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import * as S from "./adminPostPage.style";
import { AdminEditForm } from "@/components/molecules/AdminEditForm";
import { getOnePostInfoApi } from "@/apis/postsApi";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const AdminPostEditPage = () => {
  return (
    <AdminLayout title="업체 정보수정">
      <S.adminPostPage>
        <AdminEditForm />
      </S.adminPostPage>
    </AdminLayout>
  );
};
