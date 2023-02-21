import styled from "styled-components";

export const BannerSection = styled.section`
  grid-area: BN;
  display: grid;
  width: 1240px;
  grid-template-areas:
    "LG LG LG"
    "SM1 SM2 SM3";
  grid-template-rows: 120px 80px;
  grid-gap: 8px;
`;
