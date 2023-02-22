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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0 16px;
    grid-template-areas:
      "TT"
      "IF"
      "IMG";
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }
`;

export const PriceTit = styled.div`
  grid-area: TT;
  font-size: 2rem;
  font-weight: 500;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
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

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    padding: 0 0 10px;
    font-size: 1.5rem;
  }
`;
