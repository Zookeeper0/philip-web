import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./locationBox.style";
import Map from "../../atoms/Map";
import { Button, ButtonGroup } from "@/components/atoms/Button";
import IconDown from "public/assets/svg/icon-arrow-down.svg";

export const LocationBox = ({ post, title, openHandler, open }: any) => {
  return (
    <S.LocationBox blur={true}>
      <ButtonGroup height={100}>
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
      <S.LocationTit>{title}</S.LocationTit>
      <S.LocationMap>
        <Map address={post?.title} />
      </S.LocationMap>
      <S.LocationInfo>
        {post?.address}
        <CopyButton label="주소복사" text={post?.address} />
      </S.LocationInfo>
    </S.LocationBox>
  );
};
