import { AsideSection } from "@/components/organisms/AsideSection";
import { BannerSection } from "@/components/organisms/BannerSection";
import { ContentSection } from "@/components/organisms/ContentSection";

import * as S from "./mainPage.style";

interface MainPageProp {
  postItem: [];
  adsData: [];
  count: any;
  cityOptions: any[];
  getCityOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  city: any;
  categoryOptions: any[];
  getCategoryOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  category: any;
  getValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const MainPage = ({
  postItem,
  adsData,
  count,
  cityOptions,
  getCityOption,
  city,
  categoryOptions,
  getCategoryOption,
  category,
  getValue,
}: MainPageProp) => {
  return (
    <S.MainLayout>
      <BannerSection adsData={adsData} />
      <AsideSection
        count={count}
        cityOptions={cityOptions}
        getCityOption={getCityOption}
        city={city}
        categoryOptions={categoryOptions}
        getCategoryOption={getCategoryOption}
        category={category}
        getValue={getValue}
      />
      <ContentSection postItem={postItem} />
    </S.MainLayout>
  );
};

export default MainPage;
