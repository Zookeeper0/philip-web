import { AdminModal } from "..";
import { Button } from "@/components/atoms/Button";
import * as S from "../adminModal.style";

export const UserModal = ({ onClose, user }: any) => {
  return (
    <AdminModal>
      {user.storeName}
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
