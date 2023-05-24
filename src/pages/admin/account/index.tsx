import { AdminAccountPage } from "@/components/templates/AdminAccountPage";
import { useQuery } from "react-query";
import { getAdminList } from "@/apis/adminApi";
import useApiError from "@/lib/hooks/useApiError";
import { useState } from "react";

const AdminAccount = () => {
  const [accountModal, setAccountModal] = useState(false);
  const [account, setAccount] = useState();
  const { handleError } = useApiError();
  const [adminSearchKeyword, setAdminSearchKeyword] = useState("");

  /** 관리자 목록 불러오기 */
  const { data: dataSource } = useQuery(
    ["getAdminList", adminSearchKeyword],
    getAdminList,
    {
      retry: 1,
      onError(error: any) {
        handleError(error);
      },
    }
  );

  const openAccountModal = (data: any) => {
    setAccount(data);
    setAccountModal(!accountModal);
  };
  return (
    <AdminAccountPage
      setAdminSearchKeyword={setAdminSearchKeyword}
      adminSearchKeyword={adminSearchKeyword}
      dataSource={dataSource}
      openAccountModal={openAccountModal}
      accountModal={accountModal}
      account={account}
    />
  );
};

export default AdminAccount;
