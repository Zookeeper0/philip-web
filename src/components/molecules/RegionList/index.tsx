import { getCityListApi } from "@/apis/categoryApi";
import RegionItem from "@/components/atoms/RegionItem";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as S from "./regionList.style";

export const RegionList = () => {
  /** 시티 select 목록 불러오기 */
  const { data: cityItem } = useQuery("getCityListApi", getCityListApi);
  const [cityOptions, setCityOptions] = useState([]);

  const options = [
    {
      id: 1,
      nameKor: "마닐라",
      nameEng: "Manila",
      value: 1,
      disabled: true,
    },
    {
      id: 2,
      nameKor: "앙헬레스",
      nameEng: "City of Angeles",
      value: 2,
      disabled: false,
    },
    {
      id: 3,
      nameKor: "세부",
      nameEng: "Cebu",
      value: 3,
      disabled: true,
    },
  ];

  console.log("cityItem", cityItem);
  useEffect(() => {
    setCityOptions(cityItem);
  }, [cityItem]);
  return (
    <S.RegionList>
      {options.map((option: any, idx: number) => {
        return <RegionItem data={option} key={idx} />;
      })}
    </S.RegionList>
  );
};
