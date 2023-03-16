import * as S from "./counter.style";
//check
export const Counter = () => {
  return (
    <S.Counter>
      <S.CounterNumSpan>0</S.CounterNumSpan>
      <S.CounterNumSpan>9</S.CounterNumSpan>
      <S.CounterNumSpan>8</S.CounterNumSpan>

      <S.CounterTxtSpan lineHeight={40}>,</S.CounterTxtSpan>

      <S.CounterNumSpan>7</S.CounterNumSpan>
      <S.CounterNumSpan>6</S.CounterNumSpan>
      <S.CounterNumSpan>5</S.CounterNumSpan>

      <S.CounterTxtSpan>명</S.CounterTxtSpan>
    </S.Counter>
  );
};
