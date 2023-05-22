import { StoreGrid } from "@/components/molecules/AdminGrid/StoreGrid";
import { StoreSearch } from "@/components/molecules/AdminSearchBox/StoreSearch";
import { useState } from "react";
import * as S from "./AdminStoreGrid.style";
import { getAdminStorePosts } from "@/apis/postsApi";
import { useQuery, useQueryClient } from "react-query";
import useApiError from "@/lib/hooks/useApiError";
import { useRecoilValue } from "recoil";
import { categoryState } from "@/recoil/category";

export const AdminStoreBox = () => {
  const [promotion, setPromotion] = useState(false);
  const { handleError } = useApiError();
  const [storeSearchKeyword, setStoreSearchKeyword] = useState("");
  const currentCategory = useRecoilValue(categoryState);

  /** 업체 목록 불러오기 */
  const { data: dataSource, isLoading } = useQuery(
    ["getAdminStorePosts", storeSearchKeyword, currentCategory, promotion],
    getAdminStorePosts,
    {
      onError(error: any) {
        handleError(error);
      },
    }
  );

  return (
    <S.AdminStoreBox>
      <StoreSearch
        setStoreSearchKeyword={setStoreSearchKeyword}
        setPromotion={setPromotion}
      />
      <StoreGrid dataSource={dataSource} isLoading={isLoading} />
    </S.AdminStoreBox>
  );
};
