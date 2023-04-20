import Image from "next/image";
import * as S from "./banner.style";

interface BannerProps {
  order: string;
  ads?: any;
}

export const Banner: React.FC<BannerProps> = ({ order, ads }) => {
  return (
    <S.Banner order={order}>
      <Image
        src={ads && `${process.env.NEXT_PUBLIC_API_URL}/${ads?.filename}`}
        layout="fill"
        alt="광고"
      />
    </S.Banner>
  );
};
