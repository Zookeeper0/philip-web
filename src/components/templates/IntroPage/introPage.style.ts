import styled from "styled-components";

export const IntroPage = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: ${(props) => props.theme.colors.mainBg};
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  opacity: 1;

  &.delayed {
    opacity: 0;
    z-index: -1;
  }
`;

export const IntroLogo = styled.div`
  width: 100px;
  height: 100px;
  background: white;
`;
