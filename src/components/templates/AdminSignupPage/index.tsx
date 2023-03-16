import { AdminLoginBox } from "@/components/molecules/AdminLoginBox";
import { AdminSignupBox } from "@/components/molecules/AdminSignupBox";
import * as S from "./adminSignupPage.style";

export const AdminSignupPage = () => {
  return (
    <S.LoginPage>
      <AdminSignupBox />
    </S.LoginPage>
  );
};
