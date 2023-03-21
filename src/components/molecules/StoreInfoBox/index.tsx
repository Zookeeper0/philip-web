import { ImageSlide } from "@/components/atoms/ImageSlide";
import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./storeInfoBox.style";
import IconPhone from "public/assets/svg/icon-phone.svg";
import Images08 from "../../../../public/assets/images/images-4.jpg";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { fetchCountViews } from "@/apis/postsApi";

export const StoreInfoBox = ({ post, randomImg }: any) => {
  return (
    <S.StoreInfoBox>
      <ImageSlide items={randomImg.images} />

      <S.StoreInfo>
        <S.StoreNameBox>
          {/* 스토어 네임 */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{post?.title}</div>
            <div style={{ fontSize: "16px" }}>
              방문자수 아이콘 : {post?.views}
            </div>
          </div>
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
