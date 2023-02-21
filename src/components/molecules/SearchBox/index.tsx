import { Button } from "@/components/atoms/Button";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";
import { InputText } from "@/components/atoms/Input/InputText";
import * as S from "./searchBox.style";

export const SearchBox = () => {
  return (
    <S.SearchBox>
      <S.SearchForm id="searchForm">
        <InputText
          label="키워드 검색"
          themeType="column"
          size="md"
          width="100%"
        />
        <InputText
          label="기타 검색"
          themeType="column"
          size="md"
          width="100%"
        />
        <InputCheckbox value="1" themeType="row" displayValue="기타 검색옵션" />
        <InputCheckbox value="2" themeType="row" displayValue="기타 검색옵션" />
      </S.SearchForm>

      <Button
        type="submit"
        form="searchForm"
        width="100%"
        height={40}
        color="primary"
        layout="solid"
        label="검색"
      />
    </S.SearchBox>
  );
};
