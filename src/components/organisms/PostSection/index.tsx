import { useRouter } from "next/router";
import { Button } from "@/components/atoms/Button";
import { StoreInfoBox } from "@/components/molecules/StoreInfoBox";
import { PriceInfoBox } from "@/components/molecules/PriceInfoBox";
import { LocationBox } from "@/components/molecules/LocationBox";
import Data from "@/data/dummy";
import * as S from "./postSection.style";
import IconBack from "public/assets/svg/icon-arrow-back.svg";

export const PostSection = () => {
  const router = useRouter();
  const postId = parseInt(router?.query?.id as string);
  const post = Data.Post[postId];

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
      <StoreInfoBox post={post} />
      <PriceInfoBox post={post} title="요금 및 메뉴 안내" />
      <LocationBox post={post} title="오시는 길" />
    </S.PostSection>
  );
};
