import { ImageSlide } from "@/components/atoms/ImageSlide";
import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./storeInfoBox.style";
import IconPhone from "public/assets/svg/icon-phone.svg";
import IconView from "public/assets/svg/icon-view.svg";
import Images08 from "../../../../public/assets/images/images-4.jpg";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { fetchCountViews } from "@/apis/postsApi";

export const StoreInfoBox = ({ post, randomImg }: any) => {
  return (
    <S.StoreInfoBox>
      <ImageSlide items={randomImg.images} />

      <S.StoreInfo>
        <S.StoreInfoTop>
          <S.StoreNameBox>
            {/* 스토어 네임 */}
            {post?.title}
            <S.CategorySpan>{post?.category}</S.CategorySpan>
          </S.StoreNameBox>
          <S.StoreViewBox>
            <IconView width={16} height={16} viewBox="0 0 24 24" />
            {post?.views}
          </S.StoreViewBox>
        </S.StoreInfoTop>
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
