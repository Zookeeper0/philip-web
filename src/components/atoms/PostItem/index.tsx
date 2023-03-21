import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./postItem.style";
import Images from "@/data/dummy";
import { useMutation } from "react-query";
import { fetchCountViews } from "@/apis/postsApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { userTokenState } from "@/recoil/userToken";

export const PostItem = ({ item }: any) => {
  const router = useRouter();
  const userToken = useRecoilValue(userTokenState);
  /** 게시물 클릭시 해당 게시물 조회수 count api */
  const mutation = useMutation("posts", fetchCountViews);

  /** 게시물 클릭시 로그인 토큰 값(userToken) 이 없다면 알림 */
  const goDetail = (e: any) => {
    if (userToken) router.push(`/main/post/${item.oid}`);
    else alert("로그인이 필요한 서비스 입니다.");
  };

  /** 게시물 클릭시 handler */
  const countViews = () => {
    mutation.mutate(item.oid);
  };

  //랜덤이미지 dummy
  const ImageDum = Math.floor(Math.random() * Images.Images.length);
  return (
    <S.PostItem
      onClick={() => {
        goDetail(item), countViews;
      }}
    >
      <S.PostItemSpan>
        {/* {item.storeName} */}
        {item.title}
        <span>{item.category}</span>
      </S.PostItemSpan>
    </S.PostItem>
  );
};
