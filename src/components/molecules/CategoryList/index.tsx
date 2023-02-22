import Data from "@/data/dummy";
import { CategoryItem } from "@/components/atoms/CategoryItem";
import * as S from "./categoryList.style";

export const CategoryList = () => {
  console.log(Data);
  return (
    <S.CategoryList>
      {Data.Menu.map((item: any, idx: number) => {
        return <CategoryItem item={item} key={idx} />;
      })}
    </S.CategoryList>
  );
};
