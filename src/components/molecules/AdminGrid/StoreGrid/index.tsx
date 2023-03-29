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

export const StoreGrid = () => {
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();

  const { data: dataSource } = useQuery(
    ["getAdminStorePosts"],
    getAdminStorePosts
  );
  const gridRef: any = useRef();
  const posts = Data.Post;

  const openStoreModal = (data: any) => {
    setStore(data);
    setStoreModal(!storeModal);
  };

  // const dataSource = useMemo(() => {

  //   return new CustomStore({
  //     key: "Oid",
  //     load: () => sendRequest(apiUrl, "GET", search),
  //   });
  // }, [search]);

  return (
    <>
      <S.AdminGrid>
        <DataGrid
          height={700}
          dataSource={dataSource}
          showRowLines={true}
          hoverStateEnabled={true}
          allowColumnResizing={true}
          allowColumnReordering={true}
          focusedRowEnabled={true}
          keyExpr="oid"
        >
          <Scrolling mode="virtual" />
          <Column caption="No." cellRender={(e) => e.rowIndex + 1} width={30} />
          <Column caption="업체명" dataField="title" width={120} />
          <Column caption="업종" dataField="category" width={80} />
          <Column caption="대표자명" dataField="ownerName" width={80} />
          <Column caption="전화번호" dataField="phone_number" width={120} />
          <Column caption="지역" dataField="region" width={80} />
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
