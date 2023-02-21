import Image from "next/image";
import * as S from "./banner.style";

interface BannerProps {
  order: string;
}

export const Banner: React.FC<BannerProps> = ({ order }) => {
  return (
    <S.Banner order={order}>
      광고 모집중 입니다.
      {/* <Image src={} /> */}
    </S.Banner>
  );
};
