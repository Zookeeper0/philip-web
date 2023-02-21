import styled from "styled-components";

interface TxtProps {
  lineHeight?: number;
}

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CounterNumSpan = styled.span`
  display: flex;
  width: 30px;
  height: 40px;
  color: white;
  font-size: 2.4rem;
  font-weight: bold;
  background: black;
  align-items: center;
  justify-content: center;
`;

export const CounterTxtSpan = styled.span<TxtProps>`
  color: white;
  font-size: 2rem;
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight + "px" : "initial"};
`;
