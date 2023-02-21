import Image from "next/image";
import { useRouter } from "next/router";
import * as S from "./postItem.style";

export const PostItem = ({ item }: any) => {
  const router = useRouter();
  const goDetail = (e: any) => {
    router.push(`/main/post/${e.id}`);
  };

  return (
    <S.PostItem onClick={() => goDetail(item)}>
      <Image
        src={item.images[0].url}
        width={220}
        height={140}
        alt="업체 이미지"
      />
      <S.PostItemSpan>
        {item.storeName}
        <span>{item.category}</span>
      </S.PostItemSpan>
    </S.PostItem>
  );
};
