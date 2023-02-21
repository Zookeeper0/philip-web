import styled from "styled-components";

export const CounterBox = styled.div`
  display: flex;
  padding: 30px;
  background: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  gap: 15px;
`;

export const CounterLabelSpan = styled.span`
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
`;
