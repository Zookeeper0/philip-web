import { Banner } from "@/components/atoms/Banner";
import * as S from "./bannerSection.style";

export const BannerSection = () => {
  return (
    <S.BannerSection>
      <Banner order="LG" />
      <Banner order="SM1" />
      <Banner order="SM2" />
      <Banner order="SM3" />
    </S.BannerSection>
  );
};
