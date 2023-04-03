import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import * as S from "./adminPostPage.style";
import { getOnePostInfoApi } from "@/apis/postsApi";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const AdminPostPage = () => {
  const router = useRouter();
  /** 업체 상세정보 불러오기 */
  const queryFn = () => getOnePostInfoApi(router.query.id);
  const { data: detailItem, isError } = useQuery(
    ["detailItem", router.query.id],
    queryFn
  );

  return (
    <AdminLayout title="업체 신규등록">
      <S.adminPostPage>
        <AdminPostForm />
      </S.adminPostPage>
    </AdminLayout>
  );
};
