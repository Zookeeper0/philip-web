import { PostListBox } from "@/components/molecules/PostListBox";
import { PromotionListBox } from "@/components/molecules/PromotionListBox";
import * as S from "./contentSection.style";

interface ContentSectionProp {
  postItem: [];
}
export const ContentSection = ({ postItem }: ContentSectionProp) => {
  return (
    <S.ContentSection>
      <PromotionListBox postItem={postItem} />
      <PostListBox />
    </S.ContentSection>
  );
};

export default ContentSection;
