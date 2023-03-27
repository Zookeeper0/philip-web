import { AdminPage } from "@/components/templates/AdminPage";
import { adminTokenState } from "@/recoil/adminToken";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

const Admin = () => {
  const adminToken = useRecoilValue(adminTokenState);
  const router = useRouter();

  /** 어드민 토큰 없는 상태에서 접근시 메인으로 이동 */
  useEffect(() => {
    // if (!adminToken) router.replace("/admin/login");
  }, []);

  return <AdminPage />;
};

export default Admin;
