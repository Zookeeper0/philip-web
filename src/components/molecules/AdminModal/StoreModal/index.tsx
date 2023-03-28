import { Button } from "@/components/atoms/Button";
import { AdminModal } from "..";

export const StoreModal = ({ onClose, store }: any) => {
  return (
    <AdminModal>
      {store.storeName}
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
