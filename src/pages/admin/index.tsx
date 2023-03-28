import { AdminPage } from "@/components/templates/AdminPage";
import { adminTokenState } from "@/recoil/adminToken";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Admin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  /** 어드민 토큰 없는 상태에서 접근시 메인으로 이동 */
  useEffect(() => {
    console.log(session?.user);
    if (!session?.user) router.replace("/admin/login");
  }, [session]);
  return <AdminPage />;
};

export default Admin;
