import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import { searchState } from "@/recoil/search";
import { useRecoilState } from "recoil";
import * as S from "../adminSearchBox.style";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { categoryState } from "@/recoil/category";
import { useQuery } from "react-query";
import { getCategoryNavApi } from "@/apis/categoryApi";
import { InputCheckbox } from "@/components/atoms/Input/InputCheckbox";

type Props = {
  setStoreSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export const StoreSearch = ({ setStoreSearchKeyword }: Props) => {
  const [categoryInput, setCategoryInput] = useRecoilState(categoryState);

  const getCategoryOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryInput(e.target.value);
  };
  /** 카테고리 select 목록 불러오기 */
  const { data: categoryItem } = useQuery(
    "getCategoryNavApi",
    getCategoryNavApi
  );

  return (
    <>
      <S.AdminSearchBox>
        <S.AdminsearchItemBox>
          <S.AdminSearchTit>카테고리</S.AdminSearchTit>
          <InputSelect
            layout="columns"
            size="sm"
            width="110px"
            themeType="admin"
            options={categoryItem}
            onChange={getCategoryOption}
            value={categoryInput}
          />
        </S.AdminsearchItemBox>

        <S.AdminsearchItemBox>
          <S.AdminSearchTit>업체명</S.AdminSearchTit>
          <InputText
            layout="adminRow"
            size="sm"
            themeType="admin"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStoreSearchKeyword(e.target.value)
            }
          />
        </S.AdminsearchItemBox>

        <S.AdminsearchItemBox>
          <InputCheckbox
            layout="row"
            themeType="admin"
            displayValue="프로모션만 보기"
          />
        </S.AdminsearchItemBox>
      </S.AdminSearchBox>
    </>
  );
};
