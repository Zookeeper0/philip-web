import { AsideSection } from "@/components/organisms/AsideSection";
import { BannerSection } from "@/components/organisms/BannerSection";
import { ContentSection } from "@/components/organisms/ContentSection";
import { tokenState } from "@/recoil/token";
import { useRecoilState } from "recoil";
import * as S from "./mainPage.style";
import { useEffect } from "react";

export const MainPage = () => {
  const [token, setToken]: any = useRecoilState(tokenState);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("signKey") || "{}");
    setToken(userInfo.accessToken);
  }, []);

  console.log("userInfo!!", token);
  return (
    <S.MainLayout>
      <BannerSection />
      <AsideSection />
      <ContentSection />
    </S.MainLayout>
  );
};

export default MainPage;
