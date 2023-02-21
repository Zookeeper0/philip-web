import { CopyButton } from "@/components/atoms/Button/CopyButton";
import * as S from "./locationBox.style";

export const LocationBox = ({ post, title }: any) => {
  return (
    <S.LocationBox>
      <S.LocationTit>{title}</S.LocationTit>
      <S.LocationMap>지도 표기</S.LocationMap>
      <S.LocationInfo>
        {post.address}
        <CopyButton label="주소복사" text={post.address} />
      </S.LocationInfo>
    </S.LocationBox>
  );
};
