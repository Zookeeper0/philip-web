import * as S from "./adminModal.style";

export const AdminModal = ({ children }: any) => {
  return (
    <>
      <S.AdminModalBG>
        <S.AdminModal>{children}</S.AdminModal>
      </S.AdminModalBG>
    </>
  );
};
