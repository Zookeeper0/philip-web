import * as S from "./adminStorePage.style";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import { AdminStoreBox } from "@/components/organisms/AdminStoreBox";
import { adminState } from "@/recoil/adminToken";
import { useRecoilState } from "recoil";

export const AdminStorePage = () => {
  return (
    <AdminLayout title="업체관리" link="store/post" linkLabel="신규등록">
      <S.AdminStorePage>
        <AdminStoreBox />
      </S.AdminStorePage>
    </AdminLayout>
  );
};
