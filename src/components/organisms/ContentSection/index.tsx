import { PostListBox } from "@/components/molecules/PostListBox";
import { PromotionListBox } from "@/components/molecules/PromotionListBox";
import * as S from "./contentSection.style";

export const ContentSection = () => {
  return (
    <S.ContentSection>
      <PromotionListBox />
      <PostListBox />
    </S.ContentSection>
  );
};

export default ContentSection;
