import { getAdsData } from "@/apis/adsApi";
import { Banner } from "@/components/atoms/Banner";
import { useQuery } from "react-query";
import * as S from "./adminAdsPreview.style";

export const AdminAdsPreview = () => {
  const { data: adsData } = useQuery("getAdsData", getAdsData);

  const topAds = adsData?.find((ads: any) => ads.label === "topAds");
  const btm1 = adsData?.find((ads: any) => ads.label === "bottom1");
  const btm2 = adsData?.find((ads: any) => ads.label === "bottom2");
  const btm3 = adsData?.find((ads: any) => ads.label === "bottom3");

  return (
    <S.AdminAdsPreview>
      <S.AdminAdsPreviewTit>배너 미리보기</S.AdminAdsPreviewTit>
      <S.AdminAdsPreviewBox>
        <Banner order="LG" ads={topAds} />
        <Banner order="SM1" ads={btm1} />
        <Banner order="SM2" ads={btm2} />
        <Banner order="SM3" ads={btm3} />
      </S.AdminAdsPreviewBox>
    </S.AdminAdsPreview>
  );
};
