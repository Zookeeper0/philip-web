import { ImageSlide } from "@/components/atoms/ImageSlide";
import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./storeInfoBox.style";
import IconPhone from "public/assets/svg/icon-phone.svg";
import Images08 from "../../../../public/assets/images/images-4.jpg";

export const StoreInfoBox = ({ post, randomImg }: any) => {
  return (
    <S.StoreInfoBox>
      <ImageSlide items={randomImg.images} />

      <S.StoreInfo>
        <S.StoreNameBox>
          {/* {post.storeName} */}
          {post?.title}
          <S.CategorySpan>{post?.category}</S.CategorySpan>
        </S.StoreNameBox>
        <S.AddressBox>{post?.address}</S.AddressBox>
        <S.PhoneBox>
          <span>
            <IconPhone />
            {post?.phone_number}
          </span>
          <CopyButton label="번호복사" text={post?.phone_number} />
        </S.PhoneBox>
      </S.StoreInfo>
    </S.StoreInfoBox>
  );
};
