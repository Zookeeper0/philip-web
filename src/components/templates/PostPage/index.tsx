import { BannerSection } from "@/components/organisms/BannerSection";
import { PostSection } from "@/components/organisms/PostSection";
import * as S from "./postPage.style";

export const PostPage = () => {
  return (
    <S.PostLayout>
      <BannerSection />
      <PostSection />
    </S.PostLayout>
  );
};
