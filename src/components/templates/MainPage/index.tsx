import { AsideSection } from "@/components/organisms/AsideSection";
import { BannerSection } from "@/components/organisms/BannerSection";
import { ContentSection } from "@/components/organisms/ContentSection";
import { tokenState } from "@/recoil/token";
import { useRecoilState } from "recoil";
import * as S from "./mainPage.style";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { todayVisitAPI } from "@/apis/userApi";

export const MainPage = () => {
  const { data: cityItem } = useQuery("getCityListApi", todayVisitAPI);
  console.log(cityItem);

  return (
    <S.MainLayout>
      <BannerSection />
      <AsideSection />
      <ContentSection />
    </S.MainLayout>
  );
};

export default MainPage;
