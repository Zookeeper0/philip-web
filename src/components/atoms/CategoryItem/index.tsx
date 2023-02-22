import { useRouter } from "next/router";
import * as S from "./categoryItem.style";

export const CategoryItem = ({ item }: any) => {
  const router = useRouter();

  const goMain = () => {
    router.push("/main");
  };

  return <S.CategoryItem onClick={goMain}>{item.name}</S.CategoryItem>;
};
