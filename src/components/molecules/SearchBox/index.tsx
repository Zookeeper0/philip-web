import useWindowWidth from "@/lib/hooks/useWindowWidth";
import { InputText } from "@/components/atoms/Input/InputText";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";
import { Button } from "@/components/atoms/Button";
import Data from "@/data/dummy";
import * as S from "./searchBox.style";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/search";
import { useMutation, useQuery } from "react-query";
import { getCategoryNavApi, getCityListApi } from "@/apis/categoryApi";
import { useForm } from "react-hook-form";
import { addPostApi } from "@/apis/postsApi";
import { categoryState } from "@/recoil/category";

export const SearchBox = () => {
  const isWindowWidth = useWindowWidth();
  const [searchInput, setSearchInput] = useRecoilState(searchState);
  const [categoryInput, setCategoryInput] = useRecoilState(categoryState);

  const [cityOptions, setCityOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  /** 카테고리 select 목록 불러오기 */
  const { data: categoryItem } = useQuery(
    "getCategoryNavApi",
    getCategoryNavApi
  );
  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const getCityOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  const getCategoryOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInput(e.target.value);
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  useEffect(() => {
    setCategoryOptions(categoryItem);
    setCityOptions(cityItem);
  }, [categoryItem, cityItem]);

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
              options={cityOptions}
              onChange={getCityOption}
            />
            <InputSelect
              themeType="row"
              size="lg"
              width="calc(50vw - 20px)"
              options={categoryItem}
              onChange={getCategoryOption}
            />
          </S.SearchMobileInput>
        )}
        <InputText
          label={isWindowWidth < 769 ? "" : "키워드 검색"}
          themeType={isWindowWidth < 769 ? "row" : "column"}
          size={isWindowWidth < 769 ? "lg" : "md"}
          width="100%"
          placeholder={isWindowWidth < 769 ? "키워드 검색..." : "입력..."}
          onChange={getValue}
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
