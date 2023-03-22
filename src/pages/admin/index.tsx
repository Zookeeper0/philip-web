import { AdminPage } from "@/components/templates/AdminPage";
import { adminTokenState } from "@/recoil/adminToken";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

const Admin = () => {
  const adminToken = useRecoilValue(adminTokenState);
  const router = useRouter();

  useEffect(() => {
    if (!adminToken) router.replace("/main");
  }, []);
  return (
    <>
      <AdminPage />
    </>
  );
};

export default Admin;
