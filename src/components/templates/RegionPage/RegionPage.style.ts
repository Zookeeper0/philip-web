import styled from "styled-components";
import ImgSelectBG from "public/assets/images/bg-select.png";

export const RegionPage = styled.section`
  display: flex;
  height: calc(100vh - 80px);
  background: url(${ImgSelectBG?.src}) no-repeat;
  background-size: conver;
  background-position: bottom;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 68px;
`;

export const RegionTxtBox = styled.div`
  color: white;
  font-size: 2rem;
`;
