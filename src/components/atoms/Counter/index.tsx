import * as S from "./counter.style";

export const Counter = () => {
  return (
    <S.Counter>
      <S.CounterNumSpan>0</S.CounterNumSpan>
      <S.CounterNumSpan>0</S.CounterNumSpan>
      <S.CounterNumSpan>0</S.CounterNumSpan>

      <S.CounterTxtSpan lineHeight={40}>,</S.CounterTxtSpan>

      <S.CounterNumSpan>0</S.CounterNumSpan>
      <S.CounterNumSpan>0</S.CounterNumSpan>
      <S.CounterNumSpan>0</S.CounterNumSpan>

      <S.CounterTxtSpan>명</S.CounterTxtSpan>
    </S.Counter>
  );
};
