import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import { searchState } from "@/recoil/search";
import { useRecoilState } from "recoil";
import * as S from "../adminSearchBox.style";

export const StoreSearch = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchState);
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <S.AdminSearchBox>
      <S.AdminSearchTit>업체검색</S.AdminSearchTit>
      <S.AdminSearch>
        <InputText layout="adminRow" size="sm" onChange={getValue} />
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
