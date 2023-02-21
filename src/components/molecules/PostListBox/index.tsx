import { useEffect, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { PostItem } from "@/components/atoms/PostItem";
import useIntersectionObserver from "@/lib/hooks/useObserver";
import Data from "@/data/dummy";
import * as S from "./postListBox.style";

export const PostListBox = () => {
  const posts = Data.Post;
  return (
    <>
      <S.PostListBox>
        <S.PostCountSpan>검색결과 총 {Data.Post.length}건</S.PostCountSpan>
        <S.PostList>
          {posts.map((item: any, idx: number) => {
            return <PostItem item={item} key={idx} />;
          })}
        </S.PostList>
      </S.PostListBox>
    </>
  );
};

export default PostListBox;
