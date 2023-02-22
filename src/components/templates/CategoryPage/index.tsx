import { CategoryList } from "@/components/molecules/CategoryList";
import * as S from "./CategoryPage.style";

export const CategoryPage = () => {
  return (
    <S.CategoryPage>
      <S.CategoryTxtBox>카테고리를 선택해 주세요.</S.CategoryTxtBox>
      <CategoryList />
    </S.CategoryPage>
  );
};
