import { AdminLoginPage } from "@/components/templates/AdminLoginPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
  return (
    <>
      <AdminLoginPage />
    </>
  );
};

export default Login;
