import { AdminModal } from "..";
import { Button } from "@/components/atoms/Button";

export const StoreModal = ({ onClose, store }: any) => {
  return (
    <AdminModal>
      {/* <div>{store.oid}</div> */}
      <div>{store.city}</div>
      <div>{store.category}</div>
      <div>{store.store_name}</div>
      {/* <div>{store.owner_name}</div> */}
      <div>{store.address}</div>
      <div>{store.phone_number}</div>
      <div>{store.contents}</div>
      {/* <div>{store.etc}</div> */}

      <Button
        type="button"
        layout="solid"
        width="60px"
        height={36}
        color="func"
        label="닫기"
        onClick={onClose}
      />
      <Button
        type="button"
        width="60px"
        height={36}
        color="primary"
        layout="solid"
        label="수정"
      />
    </AdminModal>
  );
};
