import { DataGrid } from "devextreme-react";
import { Column } from "devextreme-react/data-grid";
import { useState } from "react";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Button } from "@/components/atoms/Button";
import { AccountModal } from "../../AdminModal/AccountModal";

export const AccountGrid = () => {
  const [accountModal, setAccountModal] = useState(false);
  const [account, setAccount] = useState();

  const accounts = Data.Post;

  const openAccountModal = (data: any) => {
    setAccount(data);
    setAccountModal(!accountModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid dataSource={accounts} keyExpr="id">
          <Column caption="No." dataField="id" />
          <Column caption="ID" />
          <Column caption="이름" dataField="storeName" />
          <Column caption="관리자 권한등급" />
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
