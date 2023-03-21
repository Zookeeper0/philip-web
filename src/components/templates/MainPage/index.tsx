import { AsideSection } from "@/components/organisms/AsideSection";
import { BannerSection } from "@/components/organisms/BannerSection";
import { ContentSection } from "@/components/organisms/ContentSection";
import { tokenState } from "@/recoil/adminToken";
import { useRecoilState } from "recoil";
import * as S from "./mainPage.style";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { cookieAPI } from "@/apis/visitApi";

export const MainPage = () => {
  const { data: cookie } = useQuery("cookieAPI", cookieAPI);

  console.log(cookie);
  return (
    <S.MainLayout>
      <BannerSection />
      <AsideSection />
      <ContentSection />
    </S.MainLayout>
  );
};

export default MainPage;
