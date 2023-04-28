import { CheckBox, DataGrid, LoadPanel } from "devextreme-react";
import { Column, Editing, Scrolling } from "devextreme-react/data-grid";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { StoreModal } from "../../AdminModal/StoreModal";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import {
  getAdminStorePosts,
  promotionAPI,
  promotionRoleAPI,
} from "@/apis/postsApi";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";
import useApiError from "@/lib/hooks/useApiError";
import { InputSelect } from "@/components/atoms/Input/InputSelect";

type Props = {
  storeSearchKeyword: string;
  dataSource: any;
  isLoading: boolean;
};

const position = { of: ".datagrid-wrap" };

export const StoreGrid = ({
  storeSearchKeyword,
  dataSource,
  isLoading,
}: Props) => {
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const promotionMutation = useMutation("promotionAPI", promotionAPI, {
    onSuccess: async () => {
      await queryClient.refetchQueries(["getAdminStorePosts"], {
        active: true,
      });
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
      onSuccess: async () => {
        await queryClient.refetchQueries(["getAdminStorePosts"], {
          active: true,
        });
      },
    }
  );

  const onChangeOrder = (
    e: React.ChangeEvent<HTMLSelectElement>,
    data: any
  ) => {
    const datas = {
      oid: data.data.oid,
      order: e.target.value,
    };
    changePromotionOrderMutation.mutate(datas);
  };

  return (
    <>
      <S.AdminGrid>
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
            dataField="role"
            width={70}
            cellRender={(data) => (
              <InputSelect
                options={[
                  {
                    name: "0",
                  },
                  {
                    name: "1",
                  },
                  {
                    name: "2",
                  },
                  {
                    name: "3",
                  },
                  ,
                  {
                    name: "4",
                  },
                  ,
                  {
                    name: "5",
                  },
                ]}
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
