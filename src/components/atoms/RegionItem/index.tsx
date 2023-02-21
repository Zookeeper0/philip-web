import { useRouter } from "next/router";
import * as S from "./regionItem.style";

export const RegionItem = ({ data }: any) => {
  const router = useRouter();

  const goMain = (e: any) => {
    if (e.disabled === false) {
      router.push("/main");
    }
  };

  return (
    <S.RegionItem
      item={data.id}
      disabled={data.disabled}
      onClick={() => goMain(data)}
    >
      <S.ItemTitBox>
        <S.ItemKR>{data.nameKor}</S.ItemKR>
        <S.ItemEN>{data.nameEng}</S.ItemEN>
      </S.ItemTitBox>
    </S.RegionItem>
  );
};

export default RegionItem;
