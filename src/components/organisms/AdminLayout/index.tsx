import { AdminAsideSection } from "./AdminAsideSection";
import { AdminContentSection } from "./AdminContentSection";
import { AdminHeader } from "./AdminHeader";
import * as S from "./adminLayout.style";

export const AdminLayout = ({ children }: any) => {
  return (
    <S.AdminLayout>
      <AdminHeader />
      <AdminAsideSection />
      <AdminContentSection>{children}</AdminContentSection>
    </S.AdminLayout>
  );
};
