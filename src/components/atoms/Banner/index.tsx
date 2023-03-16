import * as S from "./banner.style";

interface BannerProps {
  order: string;
}

export const Banner: React.FC<BannerProps> = ({ order }) => {
  return <S.Banner order={order}></S.Banner>;
};
