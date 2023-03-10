import { PostItem } from "@/components/atoms/PostItem";
import Data from "@/data/dummy";
import * as S from "./promotionListBox.style";

export const PromotionListBox = () => {
  const posts = Data.Post;

  return (
    <S.PromotionListBox>
      <S.PropmotionTitSpan>이달의 프로모션</S.PropmotionTitSpan>
      <S.PromotionList>
        {posts.map((item: any, idx: number) => {
          return <PostItem item={item} key={idx} />;
        })}
      </S.PromotionList>
    </S.PromotionListBox>
  );
};
