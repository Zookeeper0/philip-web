import { AdminModal } from "..";
import { Button } from "@/components/atoms/Button";
import * as S from "../adminModal.style";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cityState } from "@/recoil/city";
import { useMutation, useQueryClient } from "react-query";
import { changeUserRoleAPI } from "@/apis/kakaoApi";

export const UserModal = ({ onClose, user }: any) => {
  const [role, setRole] = useState<string>(user?.role);
  const queryClient = useQueryClient();

  const changeUserRoleMutation = useMutation(
    "changeUserRoleAPI",
    changeUserRoleAPI,
    {
      onSuccess() {
        queryClient.refetchQueries("getKakaoUsers");
      },
    }
  );

  const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    const data = {
      oid: user.oid,
      role: e.target.value,
    };
    changeUserRoleMutation.mutate(data);
  };

  return (
    <AdminModal>
      이름 : {user?.name}
      <InputSelect
        label="지역선택"
        options={[
          {
            name: "COMMON",
          },
          {
            name: "VIP",
          },
        ]}
        layout="row"
        size="sm"
        onChange={onChangeRole}
        value={role}
      />
      <Button
        type="button"
        layout="solid"
        width="60px"
        height={36}
        color="func"
        label="닫기"
        onClick={onClose}
      />
    </AdminModal>
  );
};
