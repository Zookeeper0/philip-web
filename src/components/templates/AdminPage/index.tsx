import { AdminPostForm } from "@/components/molecules/AdminPostForm";
import React from "react";
import * as S from "./adminPage.style";

export const AdminPage = () => {
  return (
    <S.AdminPage>
      <AdminPostForm />
    </S.AdminPage>
  );
};
