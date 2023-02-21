import styled from "styled-components";

export const ImageSlide = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto 85px;
`;

export const ImageSelected = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 505px;
  height: 390px;
  border-radius: 4px;
  align-items: center;

  button {
    position: relative;
    z-index: 10;
  }
`;

export const ImageSlideList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImageSlideItem = styled.li`
  overflow: hidden;
  width: 85px;
  height: 62px;
  border-radius: 4px;
  cursor: pointer;
`;
