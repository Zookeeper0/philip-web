import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { InputText } from "@/components/atoms/Input/InputText";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";
import { Button } from "@/components/atoms/Button";
import Data from "@/data/dummy";
import * as S from "./searchBox.style";

export const SearchBox = () => {
  const isWindowWidth = useWindowWidth();

  const options = [
    {
      id: 1,
      name: "마닐라",
    },
    {
      id: 2,
      name: "앙헬레스",
    },
    {
      id: 3,
      name: "세부",
    },
  ];

  return (
    <S.SearchBox>
      <S.SearchForm id="searchForm">
        {isWindowWidth < 769 && (
          <S.SearchMobileInput>
            <InputSelect
              themeType="row"
              size="lg"
              width="calc(50vw - 20px)"
              placeholder="지역 검색"
              options={options}
            />
            <InputSelect
              themeType="row"
              size="lg"
              width="calc(50vw - 20px)"
              placeholder="카테고리 검색"
              options={Data.Menu}
            />
          </S.SearchMobileInput>
        )}
        <InputText
          label={isWindowWidth < 769 ? "" : "키워드 검색"}
          themeType={isWindowWidth < 769 ? "row" : "column"}
          size={isWindowWidth < 769 ? "lg" : "md"}
          width="100%"
          placeholder={isWindowWidth < 769 ? "키워드 검색..." : "입력..."}
        />
        {/* <InputText
          label="기타 검색"
          themeType="column"
          size="md"
          width="100%"
        />
        <InputCheckbox value="1" themeType="row" displayValue="기타 검색옵션" />
        <InputCheckbox value="2" themeType="row" displayValue="기타 검색옵션" /> */}
      </S.SearchForm>
      {isWindowWidth >= 769 && (
        <Button
          type="submit"
          form="searchForm"
          width="100%"
          height={40}
          color="search"
          layout="solid"
          label="검색"
        />
      )}
    </S.SearchBox>
  );
};
