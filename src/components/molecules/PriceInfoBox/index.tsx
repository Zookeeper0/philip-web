import Image from "next/image";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import * as S from "./priceInfoBox.style";
import IconDown from "public/assets/svg/icon-arrow-down.svg";
import Menu from "public/assets/images/menu-test.jpg";
import SampleInfo01 from "public/assets/images/sample_info01.png";

export const PriceInfoBox = ({ post, title, openHandler, open }: any) => {
  // 임시 샘플 이미지
  let InfoImg = null;
  if (post?.oid === "220975c0-c869-11ed-af91-e93afefe558a") {
    InfoImg = SampleInfo01;
  } else {
    InfoImg = Menu;
  }

  return (
    <>
      <S.PriceInfoBox isOpen={open}>
        <S.PriceTit>{title}</S.PriceTit>
        <S.PriceImg>
          <Image
            src={
              post
                ? `${process.env.NEXT_PUBLIC_API_URL}/${post?.menu[0].filename}`
                : ""
            }
            alt="선택된 업체 이미지"
            width={800}
            height={100}
          />
        </S.PriceImg>
        <S.PriceInfo>
          {post?.contents.includes(`\n`) ? (
            post?.contents.split("\n").map((line: any, idx: any) => {
              //this.props.data.content: 내용
              return (
                <S.InfoLine key={idx}>
                  {line}
                  <br />
                </S.InfoLine>
              );
            })
          ) : (
            <S.InfoLine>
              {post?.contents}
              <br />
            </S.InfoLine>
          )}
        </S.PriceInfo>
        <ButtonGroup height={24}>
          <Button
            type="button"
            size="sm"
            color="clear"
            layout="icon"
            onClick={openHandler}
            rotate={open}
          >
            <IconDown />
          </Button>
        </ButtonGroup>
      </S.PriceInfoBox>
    </>
  );
};
