import { ImageSlide } from "@/components/atoms/ImageSlide";
import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./storeInfoBox.style";
import IconPhone from "public/assets/svg/icon-phone.svg";

export const StoreInfoBox = ({ post }: any) => {
  return (
    <S.StoreInfoBox>
      <ImageSlide items={post.images} />

      <S.StoreInfo>
        <S.StoreNameBox>
          {post.storeName}
          <S.CategorySpan>{post.category}</S.CategorySpan>
        </S.StoreNameBox>
        <S.AddressBox>{post.address}</S.AddressBox>
        <S.PhoneBox>
          <span>
            <IconPhone />
            {post.phone}
          </span>
          <CopyButton label="번호복사" text={post.phone} />
        </S.PhoneBox>
      </S.StoreInfo>
    </S.StoreInfoBox>
  );
};
