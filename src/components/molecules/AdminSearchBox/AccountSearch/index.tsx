import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import * as S from "../adminSearchBox.style";

export const AccountSearch = () => {
  return (
    <S.AdminSearchBox>
      <S.AdminSearchTit>관리자 검색</S.AdminSearchTit>
      <S.AdminSearch>
        <InputText layout="adminRow" size="sm" />
        <Button
          type="submit"
          width="60px"
          height={22}
          layout="solid"
          color="func"
          label="검색"
        />
      </S.AdminSearch>
    </S.AdminSearchBox>
  );
};
