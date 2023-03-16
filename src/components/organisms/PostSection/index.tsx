import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { StoreInfoBox } from "@/components/molecules/StoreInfoBox";
import { PriceInfoBox } from "@/components/molecules/PriceInfoBox";
import { LocationBox } from "@/components/molecules/LocationBox";
import Data from "@/data/dummy";
import * as S from "./postSection.style";
import IconBack from "public/assets/svg/icon-arrow-back.svg";
import axios from "axios";
import { useQuery } from "react-query";
import { detailPostApi } from "@/apis/postsApi";

export const PostSection = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const queryFn = () => detailPostApi(router.query.id);
  const { data: bookItem, isLoading } = useQuery(
    ["bookDetail", router.query.id],
    queryFn
  );

  const openHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  //랜덤이미지 dummy
  const postId = Math.floor(Math.random() * 13);
  const randomImg = Data.Post[postId];
  return (
    <S.PostSection>
      <Button
        type="button"
        height={36}
        color="clear"
        layout="icon"
        label="목록으로"
        onClick={() => router.back()}
      >
        <IconBack />
      </Button>
      <StoreInfoBox post={bookItem} randomImg={randomImg} />
      <PriceInfoBox
        post={bookItem}
        openHandler={openHandler}
        open={isOpen}
        title="요금 및 메뉴 안내"
      />
      <LocationBox post={bookItem} title="오시는 길" />
    </S.PostSection>
  );
};
