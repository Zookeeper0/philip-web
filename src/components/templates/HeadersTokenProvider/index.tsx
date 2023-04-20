import { setToken } from "@/apis";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import Loading from "../Loading";

const HeadersTokenProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const { status, data: admin } = useSession<any>();
  const router = useRouter();

  // useEffect(() => {
  //   console.log(admin);
  //   if (router.pathname.includes("admin") && admin === undefined) {
  //     router.replace("/admin/login");
  //   }
  // }, [admin]);

  if (status === "loading") {
    return <Loading type="page" text="페이지를 불러오는 중입니다..." />;
  }

  setToken(admin?.user.accessToken);
  return (
    <>
      <Suspense
        fallback={<Loading type="page" text="페이지를 불러오는 중입니다..." />}
      >
        {children}
      </Suspense>
    </>
  );
};

export default HeadersTokenProvider;
