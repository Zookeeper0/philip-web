import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import * as S from "./adminPostPage.style";
import { AdminEditForm } from "@/components/molecules/AdminEditForm";
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
    <AdminLayout title="업체 정보수정">
      <S.adminPostPage>
        <AdminEditForm initialState={detailItem} />
      </S.adminPostPage>
    </AdminLayout>
  );
};
