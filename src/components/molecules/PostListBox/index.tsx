import { PostItem } from "@/components/atoms/PostItem";
import * as S from "./postListBox.style";
import { categoryState } from "../../../recoil/category";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchState } from "@/recoil/search";
import { useQuery } from "react-query";
import { getPostsListApi } from "@/apis/postsApi";

export const PostListBox = () => {
  //nav item 에서 현재 선택 카테고리
  const currentCategory = useRecoilValue(categoryState);
  const searchInput = useRecoilValue(searchState);

  // GET 메인 포스트, 쿼리스트링 sort ?categort = filter
  const { data: postItem, isLoading } = useQuery(
    ["getPostsListApi", currentCategory, searchInput],
    getPostsListApi
  );
  return (
    <>
      <S.PostListBox>
        <S.PostCountSpan>검색결과 총 {postItem?.length}건</S.PostCountSpan>
        <S.PostList>
          {postItem?.map((item: any, idx: number) => {
            return <PostItem item={item} key={idx} />;
          })}
        </S.PostList>
      </S.PostListBox>
    </>
  );
};

export default PostListBox;
