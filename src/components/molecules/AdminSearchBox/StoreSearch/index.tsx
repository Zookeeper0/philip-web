import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import { searchState } from "@/recoil/search";
import { useRecoilState } from "recoil";
import * as S from "../adminSearchBox.style";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { categoryState } from "@/recoil/category";
import { useQuery } from "react-query";
import { getCategoryNavApi } from "@/apis/categoryApi";

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
    <S.AdminSearchBox>
      <S.AdminSearchTit>업체검색</S.AdminSearchTit>
      <S.AdminSearch>
        <div style={{ display: "flex" }}>
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
          <InputSelect
            layout="columns"
            size="sm"
            width="60px"
            options={categoryItem}
            onChange={getCategoryOption}
            value={categoryInput}
          />
        </div>

        <Button
          type="button"
          width="60px"
          height={22}
          layout="solid"
          color="func"
          label="저장"
        />
      </S.AdminSearch>
    </S.AdminSearchBox>
  );
};
