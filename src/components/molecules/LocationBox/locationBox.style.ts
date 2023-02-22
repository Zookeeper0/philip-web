import styled from "styled-components";

export const LocationBox = styled.div`
  display: grid;
  grid-template-areas:
    "TT TT"
    "MAP IF";
  width: 100%;
  color: white;
  font-size: 1.6rem;
  font-weight: 300;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    padding: 0 16px;
    grid-template-areas:
      "TT"
      "MAP"
      "IF";
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
  }
`;

export const LocationTit = styled.div`
  grid-area: TT;
  font-size: 2rem;
  font-weight: 500;
`;

export const LocationMap = styled.div`
  grid-area: MAP;
`;

export const LocationInfo = styled.div`
  grid-area: IF;
  display: flex;
  padding: 0 10px;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    padding: 10px 0 0;
    line-height: 2rem;
  }
`;
