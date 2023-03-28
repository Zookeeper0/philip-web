import { AmdinAdsBox } from "@/components/organisms/AdminAdsBox";
import { AdminAdsPreview } from "@/components/organisms/AdminAdsPreview";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import * as S from "./adminAdsPage.style";

export const AdminAdsPage = () => {
  return (
    <AdminLayout title="광고관리">
      <S.AdminAdsPage>
        <AdminAdsPreview />
        <AmdinAdsBox />
      </S.AdminAdsPage>
    </AdminLayout>
  );
};
