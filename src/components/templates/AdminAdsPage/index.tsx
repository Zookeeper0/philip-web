import { AmdinAdsBox } from "@/components/organisms/AdminAdsBox";
import { AdminAdsPreview } from "@/components/organisms/AdminAdsPreview";
import { AdminLayout } from "@/components/organisms/AdminLayout";
import { useState } from "react";
import * as S from "./adminAdsPage.style";

export const AdminAdsPage = () => {
  const [imgPreview, setImgPreview] = useState([{ totem: "" }]);

  return (
    <AdminLayout title="광고관리">
      <S.AdminAdsPage>
        <AdminAdsPreview imgPreview={imgPreview} />
        <AmdinAdsBox setImgPreview={setImgPreview} imgPreview={imgPreview} />
      </S.AdminAdsPage>
    </AdminLayout>
  );
};
