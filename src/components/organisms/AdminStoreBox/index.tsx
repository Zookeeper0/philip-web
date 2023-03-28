import { InputText } from "@/components/atoms/Input/InputText";
import { StoreGrid } from "@/components/molecules/AdminGrid/StoreGrid";
import { StoreSearch } from "@/components/molecules/AdminSearchBox/StoreSearch";
import * as S from "./storeGrid.style";

export const AdminStoreBox = () => {
  return (
    <S.AdminStoreBox>
      <StoreSearch />
      <StoreGrid />
    </S.AdminStoreBox>
  );
};
