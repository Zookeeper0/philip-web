import { CheckBox, DataGrid, LoadPanel } from "devextreme-react";
import { Column, Editing, Scrolling } from "devextreme-react/data-grid";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { useEffect, useState } from "react";
import { StoreModal } from "../../AdminModal/StoreModal";
import { useMutation, useQueryClient } from "react-query";
import {
  getAdminStorePosts,
  promotionAPI,
  promotionRoleAPI,
} from "@/apis/postsApi";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";
import useApiError from "@/lib/hooks/useApiError";
import { InputSelect } from "@/components/atoms/Input/InputSelect";

type Props = {
  dataSource: any;
  isLoading: boolean;
};

const position = { of: ".datagrid-wrap" };

export const StoreGrid = ({ dataSource, isLoading }: Props) => {
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();
  const [error, setError] = useState();

  const queryClient = useQueryClient();
  const promotionMutation = useMutation("promotionAPI", promotionAPI, {
    onSuccess() {
      queryClient.refetchQueries("getAdminStorePosts");
    },
  });

  const openStoreModal = (data: any) => {
    setStore(data);
    setStoreModal(!storeModal);
  };

  const promotionHandler = (data: any) => {
    promotionMutation.mutate(data.data.oid);
  };

  const changePromotionOrderMutation = useMutation(
    "promotionRoleAPI",
    promotionRoleAPI,
    {
      onSuccess() {
        queryClient.refetchQueries("getAdminStorePosts");
        setError(undefined);
      },
      onError(error: any) {
        const { response } = error;
        setError(response.data.message);
      },
    }
  );

  const onChangeOrder = (
    e: React.ChangeEvent<HTMLSelectElement>,
    data: any
  ) => {
    setError(undefined);
    const datas = {
      oid: data.data.oid,
      order: e.target.value,
    };
    changePromotionOrderMutation.mutate(datas);
  };

  const h = 10;
  const w = 10;
  const orderOptions = Array(h * w)
    .fill(0)
    .map((arr, i) => {
      // (arr: 현재값, i:인덱스)
      return { name: i };
    });
  return (
    <>
      <S.AdminGrid>
        <S.ErrorMsg>{error}</S.ErrorMsg>

        <DataGrid
          className={"datagrid-wrap"}
          height={700}
          dataSource={dataSource}
          showRowLines={true}
          hoverStateEnabled={true}
          allowColumnReordering={true}
          focusedRowEnabled={true}
          keyExpr="oid"
        >
          <LoadPanel
            shadingColor="rgba(101, 101, 101, 0.4)"
            visible={isLoading}
            position={position}
          />
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
          <Column caption="주소" dataField="address" minWidth={80} />
          <Column
            caption="프로모션"
            dataField="promotion"
            width={60}
            cellRender={(data) => (
              <InputCheckbox
                value="1"
                checked={data.data.promotion}
                themeType="admin"
                layout="row"
                onChange={() => {
                  promotionHandler(data);
                }}
              />
            )}
          />
          <Column
            caption="순서"
            dataField="order"
            width={70}
            cellRender={(data) => (
              <InputSelect
                options={orderOptions}
                layout="colums"
                size="sm"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  onChangeOrder(e, data);
                }}
                value={data.data.order}
              />
            )}
          />
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
