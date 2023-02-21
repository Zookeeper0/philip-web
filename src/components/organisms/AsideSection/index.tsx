import { CounterBox } from "@/components/molecules/CounterBox";
import { LinkBox } from "@/components/molecules/LinkBox";
import { SearchBox } from "@/components/molecules/SearchBox";
import * as S from "./asideSection.style";

export const AsideSection = () => {
  return (
    <S.AsideSection>
      <CounterBox />
      <SearchBox />
      <LinkBox />
    </S.AsideSection>
  );
};
