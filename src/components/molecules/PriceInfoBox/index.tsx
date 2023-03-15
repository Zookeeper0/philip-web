import * as S from "./priceInfoBox.style";

import Menu from "public/assets/images/menu-test.jpg";
import Image from "next/image";

export const PriceInfoBox = ({ post, title, open }: any) => {
  return (
    <>
      <S.PriceInfoBox isOpen={open}>
        <S.PriceTit>{title}</S.PriceTit>
        <S.PriceImg>
          <Image src={Menu} alt="선택된 업체 이미지" />
        </S.PriceImg>
        <S.PriceInfo>{post?.contents}</S.PriceInfo>
      </S.PriceInfoBox>
    </>
  );
};
