import styled from "styled-components";

export const PriceInfoBox = styled.div`
  display: grid;
  grid-template-areas:
    "TT TT"
    "IMG IF";
  // "BT BT";
  width: 100%;
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const PriceTit = styled.div`
  grid-area: TT;
  font-size: 2rem;
  font-weight: 500;
`;

export const PriceImg = styled.div`
  grid-area: IMG;
  display: flex;
  width: 100%;
  height: 500px;
  background: white;
  border-radius: 4px;
`;

export const PriceInfo = styled.div`
  grid-area: IF;
  padding: 0 10px;
`;
