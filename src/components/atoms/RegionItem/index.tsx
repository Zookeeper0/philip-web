import { useRouter } from "next/router";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import * as S from "./regionItem.style";
import IconArrowWt from "public/assets/svg/icon-link-arrow-white.svg";

export const RegionItem = ({ data }: any) => {
  const router = useRouter();
  const isWindowWidth = useWindowWidth();

  const goMain = (e: any) => {
    if (e.disabled === false) {
      isWindowWidth < 769
        ? router.push("/select/category")
        : router.push("/main");
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
      {!data.disabled && <IconArrowWt viewBox="0 0 24 24" />}
    </S.RegionItem>
  );
};

export default RegionItem;
