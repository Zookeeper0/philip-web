import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import * as S from "../adminSearchBox.style";

interface UserSearchProps {
  setUserSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export const UserSearch = ({ setUserSearchKeyword }: UserSearchProps) => {
  return (
    <S.AdminSearchBox>
      <S.AdminSearchTit>회원검색</S.AdminSearchTit>
      <S.AdminSearch>
        <InputText
          layout="adminRow"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserSearchKeyword(e.target.value)
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
