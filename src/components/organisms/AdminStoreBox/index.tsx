import { StoreGrid } from "@/components/molecules/AdminGrid/StoreGrid";
import { StoreSearch } from "@/components/molecules/AdminSearchBox/StoreSearch";
import * as S from "./AdminStoreGrid.style";

export const AdminStoreBox = () => {
  return (
    <S.AdminStoreBox>
      <StoreSearch />
      <StoreGrid />
    </S.AdminStoreBox>
  );
};
