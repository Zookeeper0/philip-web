import { AdminLoginBox } from "@/components/molecules/AdminLoginBox";
import { AdminSignupBox } from "@/components/molecules/AdminSignupBox";
import * as S from "./adminSignupPage.style";

export interface AdminSignupPageProps {
  handleSubmit: any;
  Submit: (data: any) => void;
  register: any;
}
export const AdminSignupPage = ({
  handleSubmit,
  Submit,
  register,
}: AdminSignupPageProps) => {
  return (
    <S.LoginPage>
      <AdminSignupBox
        handleSubmit={handleSubmit}
        Submit={Submit}
        register={register}
      />
    </S.LoginPage>
  );
};
