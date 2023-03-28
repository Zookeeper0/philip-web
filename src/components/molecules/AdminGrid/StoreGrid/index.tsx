import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { StoreModal } from "../../AdminModal/StoreModal";

export const StoreGrid = () => {
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();

  const posts = Data.Post;

  const openStoreModal = (data: any) => {
    setStore(data);
    setStoreModal(!storeModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid dataSource={posts} keyExpr="id">
          <Column caption="업체명" dataField="storeName" width={120} />
          <Column caption="업종" dataField="category" width={80} />
          <Column caption="대표자명" dataField="ownerName" width={80} />
          <Column caption="전화번호" dataField="phone" width={120} />
          <Column caption="지역" dataField="region" width={80} />
          <Column caption="주소" dataField="address" />
          <Column caption="등록일" dataField="registerDate" width={90} />
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
