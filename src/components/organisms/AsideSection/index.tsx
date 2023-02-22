import { CounterBox } from "@/components/molecules/CounterBox";
import { LinkBox } from "@/components/molecules/LinkBox";
import { SearchBox } from "@/components/molecules/SearchBox";
import useWindowWidth from "@/lib/hooks/useWindowWidth";
import * as S from "./asideSection.style";

export const AsideSection = () => {
  const isWindowWidth = useWindowWidth();
  return (
    <S.AsideSection>
      <CounterBox />
      <SearchBox />
      {isWindowWidth >= 769 && <LinkBox />}
    </S.AsideSection>
  );
};
