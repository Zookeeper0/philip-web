import { AdminStorePage } from "@/components/templates/AdminStorePage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminStore = () => {
  return <AdminStorePage />;
};

export default AdminStore;
