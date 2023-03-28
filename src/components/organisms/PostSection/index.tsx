import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { StoreInfoBox } from "@/components/molecules/StoreInfoBox";
import { PriceInfoBox } from "@/components/molecules/PriceInfoBox";
import { LocationBox } from "@/components/molecules/LocationBox";
import Data from "@/data/dummy";
import * as S from "./postSection.style";
import IconBack from "public/assets/svg/icon-arrow-back.svg";
import { useMutation, useQuery } from "react-query";
import { deletePost, detailPostApi } from "@/apis/postsApi";
import { useRecoilValue } from "recoil";
import { adminInfoState } from "@/recoil/adminInfo";

export const PostSection = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const adminInfo = useRecoilValue(adminInfoState);

  const queryFn = () => detailPostApi(router.query.id);
  const { data: detailItem, isLoading } = useQuery(
    ["detailItem", router.query.id],
    queryFn
  );

  const mutation = useMutation("posts", deletePost);
  const postDelete = () => {
    mutation.mutate(detailItem.oid);
    router.back();
  };

  const openHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // 임시 랜덤이미지 dummy
  let randomImg = null;
  if (router.query.id === "220975c0-c869-11ed-af91-e93afefe558a") {
    randomImg = Data.SampleDetail[0];
  } else {
    const postId = Math.floor(Math.random() * 13);
    randomImg = Data.Post[postId];
  }

  return (
    <S.PostSection>
      <div style={{ justifyContent: "space-between", display: "flex" }}>
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
        {/* {detailItem?.admin_oid === adminInfo ? (
          <Button
            type="button"
            height={36}
            color="clear"
            layout="icon"
            label="삭제"
            onClick={() => postDelete()}
          ></Button>
        ) : (
          ""
        )} */}
      </div>

      <StoreInfoBox post={detailItem} randomImg={randomImg} />
      <PriceInfoBox
        post={detailItem}
        openHandler={openHandler}
        open={isOpen}
        title="요금 및 메뉴 안내"
      />
      <LocationBox post={detailItem} title="오시는 길" />
    </S.PostSection>
  );
};
