import { AdminPage } from "@/components/templates/AdminPage";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Admin = () => {
  const { data: admin } = useSession();
  const router = useRouter();

  /** 어드민 토큰 없는 상태에서 접근시 메인으로 이동 */
  useEffect(() => {
    if (!admin?.user) router.replace("/admin/login");
    else router.replace("/admin/store");
  }, [admin]);
  return <AdminPage />;
};

export default Admin;
