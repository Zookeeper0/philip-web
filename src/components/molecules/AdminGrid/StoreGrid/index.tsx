import { DataGrid } from "devextreme-react";
import { Column, Scrolling } from "devextreme-react/data-grid";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { useMemo, useRef, useState } from "react";
import { StoreModal } from "../../AdminModal/StoreModal";
import CustomStore from "devextreme/data/custom_store";
import { useQuery } from "react-query";
import { getAdminStorePosts, getPostsListApi } from "@/apis/postsApi";
import { useRecoilValue } from "recoil";
import { searchState } from "@/recoil/search";

type Props = {
  storeSearchKeyword: string;
};

export const StoreGrid = ({ storeSearchKeyword }: Props) => {
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();

  /** 업체 목록 불러오기 */
  const { data: dataSource } = useQuery(
    ["getAdminStorePosts", storeSearchKeyword],
    getAdminStorePosts
  );

  const openStoreModal = (data: any) => {
    console.log("data: ", data);
    setStore(data);
    setStoreModal(!storeModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid
          height={700}
          dataSource={dataSource}
          showRowLines={true}
          hoverStateEnabled={true}
          allowColumnReordering={true}
          focusedRowEnabled={true}
          keyExpr="oid"
        >
          <Scrolling mode="virtual" />
          <Column
            caption="No."
            cellRender={(e) => e.row.loadIndex + 1}
            width={30}
          />
          <Column caption="업체명" dataField="store_name" width={120} />
          <Column caption="업종" dataField="category" width={80} />
          <Column caption="대표자명" dataField="owner_name" width={80} />
          <Column caption="전화번호" dataField="phone_number" width={120} />
          <Column caption="지역" dataField="city" width={80} />
          <Column caption="주소" dataField="address" />
          <Column
            caption="등록일"
            dataField="created_at"
            dataType="date"
            format="yyyy-MM-dd"
            width={90}
          />
          <Column
            caption="상세보기"
            width={90}
            cellRender={(e) => (
              <Button
                type="button"
                color="func"
                layout="solid"
                width="60px"
                height={24}
                label="보기"
                onClick={() => openStoreModal(e.data)}
              />
            )}
          />
        </DataGrid>
      </S.AdminGrid>
      {storeModal && <StoreModal onClose={openStoreModal} store={store} />}
    </>
  );
};
