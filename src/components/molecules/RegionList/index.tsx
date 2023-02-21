import RegionItem from "@/components/atoms/RegionItem";
import * as S from "./regionList.style";

export const RegionList = () => {
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

  return (
    <S.RegionList>
      {options.map((option: any, idx: number) => {
        return <RegionItem data={option} key={idx} />;
      })}
    </S.RegionList>
  );
};
