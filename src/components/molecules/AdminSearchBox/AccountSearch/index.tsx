import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import * as S from "../adminSearchBox.style";

interface AccountSearchProps {
  setAdminSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const AccountSearch = ({
  setAdminSearchKeyword,
}: AccountSearchProps) => {
  return (
    <S.AdminSearchBox>
      <S.AdminSearchTit>관리자 검색</S.AdminSearchTit>
      <S.AdminSearch>
        <InputText
          layout="adminRow"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAdminSearchKeyword(e.target.value)
          }
        />
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
