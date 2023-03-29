import { StoreGrid } from "@/components/molecules/AdminGrid/StoreGrid";
import { StoreSearch } from "@/components/molecules/AdminSearchBox/StoreSearch";
import { useState } from "react";
import * as S from "./AdminStoreGrid.style";

export const AdminStoreBox = () => {
  const [storeSearchKeyword, setStoreSearchKeyword] = useState("");

  return (
    <S.AdminStoreBox>
      <StoreSearch setStoreSearchKeyword={setStoreSearchKeyword} />
      <StoreGrid storeSearchKeyword={storeSearchKeyword} />
    </S.AdminStoreBox>
  );
};
