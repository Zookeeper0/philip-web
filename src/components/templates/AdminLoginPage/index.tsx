import { AdminLoginBox } from "@/components/molecules/AdminLoginBox";
import * as S from "./adminLoginPage.style";

export const AdminLoginPage = () => {
  useInfiniteQuery;
  return (
    <S.LoginPage>
      <AdminLoginBox />
    </S.LoginPage>
  );
};
