import { CheckBox, DataGrid, LoadPanel } from "devextreme-react";
import { Column, Paging, Scrolling } from "devextreme-react/data-grid";
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
import { useRouter } from "next/router";

type Props = {
  dataSource: any;
  isLoading: boolean;
};

const position = { of: ".datagrid-wrap" };

export const StoreGrid = ({ dataSource, isLoading }: Props) => {
  const router = useRouter();
  const [storeModal, setStoreModal] = useState(false);
  const [store, setStore] = useState();
  const [error, setError] = useState();

  const queryClient = useQueryClient();
  const promotionMutation = useMutation("promotionAPI", promotionAPI, {
    onSuccess() {
      queryClient.refetchQueries("getAdminStorePosts");
    },
  });

  // const openStoreModal = (data: any) => {
  //   setStore(data);
  //   setStoreModal(!storeModal);
  // };

  /** 상세보기 클릭 시 업체정보 수정창 바로가기 */
  const goEdit = (e: any) => {
    // if (userToken || admin?.user) router.push(`/main/post/${item.oid}`);
    // else alert("로그인이 필요한 서비스 입니다.");
    router.push(`/admin/store/edit/${e.oid}`);
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
        {error && <S.ErrorMsg>[errored] {error}</S.ErrorMsg>}

        <DataGrid
          className={"datagrid-wrap"}
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
          <Paging defaultPageSize={10} />
          <Scrolling mode="virtual" useNative={false} />
          <Column
            caption="No."
            cellRender={(e) => e.row.loadIndex + 1}
            width={40}
            alignment="center"
          />
          <Column
            caption="업체명"
            dataField="store_name"
            width={140}
            alignment="center"
          />
          <Column
            caption="업종"
            dataField="category"
            width={100}
            alignment="center"
          />
          <Column
            caption="대표자명"
            dataField="owner_name"
            width={100}
            alignment="center"
          />
          <Column
            caption="전화번호"
            dataField="phone_number"
            width={140}
            alignment="center"
          />
          <Column
            caption="지역"
            dataField="city"
            width={80}
            alignment="center"
          />
          <Column
            caption="주소"
            dataField="address"
            minWidth={80}
            hidingPriority={2}
          />
          <Column
            caption="프로모션"
            dataField="promotion"
            width={64}
            alignment="center"
            cellRender={(data) => (
              <S.AdminCellBox>
                <InputCheckbox
                  value="1"
                  checked={data.data.promotion}
                  themeType="admin"
                  layout="row"
                  onChange={() => {
                    promotionHandler(data);
                  }}
                />
              </S.AdminCellBox>
            )}
          />
          <Column
            caption="순서"
            dataField="order"
            width={60}
            alignment="center"
            cellRender={(data) => (
              <InputSelect
                options={orderOptions}
                layout="colums"
                size="sm"
                width="50px"
                themeType="admin"
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
            alignment="center"
            hidingPriority={1}
          />
          <Column
            caption="상세보기"
            width={70}
            alignment="center"
            cellRender={(e) => (
              <Button
                type="button"
                color="func"
                layout="solid"
                width="60px"
                height={24}
                label="보기"
                onClick={() => goEdit(e.data)}
              />
            )}
          />
        </DataGrid>
      </S.AdminGrid>
      {/* {storeModal && <StoreModal onClose={openStoreModal} store={store} />} */}
    </>
  );
};
