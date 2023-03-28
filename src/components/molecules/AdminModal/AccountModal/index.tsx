import { Button } from "@/components/atoms/Button";
import { AdminModal } from "..";

export const AccountModal = ({ onClose, account }: any) => {
  return (
    <AdminModal>
      {account.storeName}
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
