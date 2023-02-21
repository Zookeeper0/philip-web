import { Counter } from "@/components/atoms/Counter";
import * as S from "./counterBox.style";

export const CounterBox = () => {
  return (
    <S.CounterBox>
      <S.CounterLabelSpan>오늘의 방문자수</S.CounterLabelSpan>
      <Counter />
    </S.CounterBox>
  );
};
