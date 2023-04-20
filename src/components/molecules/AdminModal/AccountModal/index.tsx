import { Button } from "@/components/atoms/Button";
import { AdminModal } from "..";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { changeAdminRoleAPI } from "@/apis/adminApi";

export const AccountModal = ({ onClose, account }: any) => {
  const [role, setRole] = useState<string>(account?.role);
  const queryClient = useQueryClient();

  const changeUserRoleMutation = useMutation(
    "changeAdminRoleAPI",
    changeAdminRoleAPI,
    {
      onSuccess() {
        queryClient.refetchQueries("getAdminList");
      },
    }
  );

  const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    const data = {
      oid: account.oid,
      role: e.target.value,
    };
    changeUserRoleMutation.mutate(data);
  };

  return (
    <AdminModal>
      {account?.name}
      <InputSelect
        label="지역선택"
        options={[
          {
            name: "SUPER",
          },
          {
            name: "ADMIN",
          },
          {
            name: "SUB",
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
