import { AsideSection } from "@/components/organisms/AsideSection";
import { BannerSection } from "@/components/organisms/BannerSection";
import { ContentSection } from "@/components/organisms/ContentSection";

import * as S from "./mainPage.style";
import { useQuery } from "react-query";
import { checkTodayVisit } from "@/apis/visitApi";

export const MainPage = () => {
  const { data: cookie } = useQuery("checkTodayVisit", checkTodayVisit);

  return (
    <S.MainLayout>
      <BannerSection />
      <AsideSection />
      <ContentSection />
    </S.MainLayout>
  );
};

export default MainPage;
