import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./postItem.style";
import Images from "@/data/dummy";
import { useMutation } from "react-query";
import { fetchCountViews } from "@/apis/postsApi";

export const PostItem = ({ item }: any) => {
  const router = useRouter();

  const goDetail = (e: any) => {
    router.push(`/main/post/${item.oid}`);
  };

  const mutation = useMutation("posts", fetchCountViews, {
    onSuccess() {},
    onError(err) {
      console.log(err);
    },
  });

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
      <Image
        src={Images.Images[ImageDum].url.src}
        layout="fill"
        alt="업체 이미지"
      />
      <S.PostItemSpan>
        {/* {item.storeName} */}
        {item.title}
        <span>{item.category}</span>
      </S.PostItemSpan>
    </S.PostItem>
  );
};
