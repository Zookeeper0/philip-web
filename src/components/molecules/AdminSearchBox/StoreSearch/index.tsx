import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import { searchState } from "@/recoil/search";
import { useRecoilState } from "recoil";
import * as S from "../adminSearchBox.style";

type Props = {
  setStoreSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export const StoreSearch = ({ setStoreSearchKeyword }: Props) => {
  return (
    <S.AdminSearchBox>
      <S.AdminSearchTit>업체검색</S.AdminSearchTit>
      <S.AdminSearch>
        <InputText
          layout="adminRow"
          size="sm"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setStoreSearchKeyword(e.target.value)
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
