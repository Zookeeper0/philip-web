import { setToken } from "@/apis";
import { signOut, useSession } from "next-auth/react";
import { Suspense } from "react";
import Loading from "../Loading";

const HeadersTokenProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const { status, data: admin } = useSession<any>();

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
