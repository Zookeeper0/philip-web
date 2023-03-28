import { Banner } from "@/components/atoms/Banner";
import * as S from "./adminAdsPreview.style";

export const AdminAdsPreview = () => {
  return (
    <S.AdminAdsPreview>
      <S.AdminAdsPreviewTit>배너 미리보기</S.AdminAdsPreviewTit>
      <S.AdminAdsPreviewBox>
        <Banner order="LG" />
        <Banner order="SM1" />
        <Banner order="SM2" />
        <Banner order="SM3" />
      </S.AdminAdsPreviewBox>
    </S.AdminAdsPreview>
  );
};
