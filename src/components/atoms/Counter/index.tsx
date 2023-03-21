import { getVisitCount } from "@/apis/visitApi";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import * as S from "./counter.style";
//check
export const Counter = () => {
  const { data: todayCount } = useQuery("getVisitCount", getVisitCount);
  const [count, setCount] = useState<any>([]);

  /** getVisitCount로부터 오늘의 방문자수 얻어와서 처리 */
  useEffect(() => {
    const str = String(todayCount);
    const mapfn = (arg: string) => Number(arg);

    const newArr = Array.from(str, mapfn);

    setCount(newArr);
  }, [todayCount]);

  return (
    <S.Counter>
      <S.CounterNumSpan>
        {count[count.length - 6] ? count[count.length - 6] : 0}
      </S.CounterNumSpan>
      <S.CounterNumSpan>
        {count[count.length - 5] ? count[count.length - 5] : 0}
      </S.CounterNumSpan>
      <S.CounterNumSpan>
        {count[count.length - 4] ? count[count.length - 4] : 0}
      </S.CounterNumSpan>

      <S.CounterTxtSpan lineHeight={40}>,</S.CounterTxtSpan>

      <S.CounterNumSpan>
        {count[count.length - 3] ? count[count.length - 3] : 0}
      </S.CounterNumSpan>
      <S.CounterNumSpan>
        {count[count.length - 2] ? count[count.length - 2] : 0}
      </S.CounterNumSpan>
      <S.CounterNumSpan>
        {count[count.length - 1] ? count[count.length - 1] : 0}
      </S.CounterNumSpan>

      <S.CounterTxtSpan>명</S.CounterTxtSpan>
    </S.Counter>
  );
};
