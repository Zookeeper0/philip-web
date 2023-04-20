import { AdminModal } from "..";
import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/router";

export const StoreModal = ({ onClose, store }: any) => {
  const router = useRouter();
  const goEdit = (e: any) => {
    // if (userToken || admin?.user) router.push(`/main/post/${item.oid}`);
    // else alert("로그인이 필요한 서비스 입니다.");
    router.push(`/admin/store/edit/${store.oid}`);
  };
  return (
    <AdminModal>
      <div>{store.oid}</div>
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
        onClick={goEdit}
      />
    </AdminModal>
  );
};
