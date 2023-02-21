import { Button, ButtonGroup } from "@/components/atoms/Button";
import * as S from "./priceInfoBox.style";
import IconDown from "public/assets/svg/icon-arrow-down.svg";

export const PriceInfoBox = ({ post, title }: any) => {
  return (
    <>
      <S.PriceInfoBox>
        <S.PriceTit>{title}</S.PriceTit>
        <S.PriceImg>요금 이미지</S.PriceImg>
        <S.PriceInfo>{post.content}</S.PriceInfo>
        {/* <ButtonGroup>
          <Button type="button" size="sm" color="clear" layout="icon">
            <IconDown />
          </Button>
        </ButtonGroup> */}
      </S.PriceInfoBox>
    </>
  );
};
