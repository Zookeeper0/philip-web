import { getPostsListApi, getPromtionListApi } from "@/apis/postsApi";
import { PostItem } from "@/components/atoms/PostItem";
import Data from "@/data/dummy";
import { categoryState } from "@/recoil/category";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import * as S from "./promotionListBox.style";

export const PromotionListBox = () => {
  //nav item 에서 현재 선택 카테고리
  const [currentCategory, setCurrentCategory] = useRecoilState(categoryState);

  // GET 프로모션 포스트, 쿼리스트링 category
  const { data: postItem, isLoading } = useQuery(
    ["getPromtionListApi", currentCategory],
    getPromtionListApi
  );

  return (
    <S.PromotionListBox>
      <S.PropmotionTitSpan>이달의 프로모션</S.PropmotionTitSpan>
      <S.PromotionList>
        {postItem?.map((item: any, idx: number) => {
          return <PostItem item={item} key={idx} />;
        })}
      </S.PromotionList>
    </S.PromotionListBox>
  );
};
