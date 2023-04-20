import { DataGrid, Lookup } from "devextreme-react";
import Data from "@/data/dummy";
import * as S from "../adminGrid.style";
import { Column, Editing } from "devextreme-react/data-grid";
import { Button } from "@/components/atoms/Button";
import { useMemo, useState } from "react";
import { UserModal } from "../../AdminModal/UserModal";
import { useQuery } from "react-query";
import { getKakaoUserList } from "@/apis/kakaoApi";
import useApiError from "@/lib/hooks/useApiError";

interface UserGridProps {
  userSearchKeyword: string;
}

export const UserGrid = ({ userSearchKeyword }: UserGridProps) => {
  const { handleError } = useApiError();
  const [userModal, setUserModal] = useState(false);
  const [user, setUser] = useState();

  /** 회원목록 불러오기 */
  const { data: dataSource } = useQuery(
    ["getKakaoUsers", userSearchKeyword],
    getKakaoUserList,
    {
      retry: 1,
      onError(error: any) {
        handleError(error);
      },
    }
  );

  const openUserModal = (data: any) => {
    setUser(data);
    setUserModal(!userModal);
  };

  return (
    <>
      <S.AdminGrid>
        <DataGrid dataSource={dataSource} keyExpr="kakao_id">
          <Editing mode="batch" startEditAction="dblClick" />
          <Column
            caption="No."
            cellRender={(e) => e.row.loadIndex + 1}
            width={30}
          />
          <Column caption="이름" dataField="name" />
          <Column caption="카카오ID" dataField="kakao_id" />
          <Column caption="연락처" dataField="phone_number" />
          <Column caption="회원등급" dataField="role" />
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
