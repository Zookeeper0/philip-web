import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
import { useState } from "react";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { AccountModal } from "../../AdminModal/AccountModal";
import { useQuery } from "react-query";
import { getAdminList } from "@/apis/adminApi";
import useApiError from "@/lib/hooks/useApiError";

interface AccountGridProps {
  adminSearchKeyword: string;
}

export const AccountGrid = ({ adminSearchKeyword }: AccountGridProps) => {
  const [accountModal, setAccountModal] = useState(false);
  const [account, setAccount] = useState();
  const { handleError } = useApiError();

  /** 관리자 목록 불러오기 */
  const { data: dataSource } = useQuery(
    ["getAdminList", adminSearchKeyword],
    getAdminList,
    {
      retry: 1,
      onError(error: any) {
        handleError(error);
      },
    }
  );

  const openAccountModal = (data: any) => {
    setAccount(data);
    setAccountModal(!accountModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid dataSource={dataSource} keyExpr="oid">
          <Column
            caption="No."
            cellRender={(e) => e.row.loadIndex + 1}
            width={40}
            alignment="center"
          />
          <Column
            caption="ID"
            dataField="admin_id"
            width={100}
            alignment="center"
          />
          <Column
            caption="이름"
            dataField="name"
            width={100}
            alignment="center"
          />
          <Column
            caption="담당부서"
            dataField="department"
            width={100}
            alignment="center"
          />
          <Column
            caption="담당지역"
            dataField="region"
            width={100}
            alignment="center"
          />
          <Column
            caption="관리자 권한등급"
            dataField="role"
            width={100}
            alignment="center"
          />
          <Column caption="비고" dataField="note" alignment="center" />
          <Column
            caption="계정생성일"
            dataField="created_at"
            dataType="date"
            format="yyyy-MM-dd"
            width={120}
            alignment="center"
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
                onClick={() => openAccountModal(e.data)}
              />
            )}
          />
        </DataGrid>
      </S.AdminGrid>
      {accountModal && (
        <AccountModal onClose={openAccountModal} account={account} />
      )}
    </>
  );
};
