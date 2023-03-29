import { DataGrid } from "devextreme-react";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Column } from "devextreme-react/data-grid";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { UserModal } from "../../AdminModal/UserModal";

export const UserGrid = () => {
  const [userModal, setUserModal] = useState(false);
  const [user, setUser] = useState();

  const users = Data.Post;

  const openUserModal = (data: any) => {
    setUser(data);
    setUserModal(!userModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid dataSource={users} keyExpr="id">
          <Column caption="No." dataField="id" />
          <Column caption="이름" dataField="storeName" />
          <Column caption="카카오ID" />
          <Column caption="연락처" />
          <Column caption="회원등급" />
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
                onClick={() => openUserModal(e.data)}
              />
            )}
          />
        </DataGrid>
      </S.AdminGrid>
      {userModal && <UserModal onClose={openUserModal} user={user} />}
    </>
  );
};
