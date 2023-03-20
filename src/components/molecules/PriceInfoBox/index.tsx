import Image from "next/image";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import * as S from "./priceInfoBox.style";
import IconDown from "public/assets/svg/icon-arrow-down.svg";
import Menu from "public/assets/images/menu-test.jpg";

export const PriceInfoBox = ({ post, title, openHandler, open }: any) => {
  return (
    <>
      <S.PriceInfoBox isOpen={open}>
        <S.PriceTit>{title}</S.PriceTit>
        <S.PriceImg>
          {/* <Image src={Menu} alt="선택된 업체 이미지" height={100} /> */}
        </S.PriceImg>
        <S.PriceInfo>{post?.contents}</S.PriceInfo>
        <ButtonGroup height={24}>
          <Button
            type="button"
            size="sm"
            color="clear"
            layout="icon"
            onClick={openHandler}
            rotate={"open"}
          >
            <IconDown />
          </Button>
        </ButtonGroup>
      </S.PriceInfoBox>
    </>
  );
};
