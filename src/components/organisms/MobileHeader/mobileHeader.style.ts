import styled from "styled-components";

export const MobileHeader = styled.header`\
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  height: 64px;
  top: 0;
  background: ${(props) => props.theme.colors.mainBg};
  align-items: center;
  justify-content: space-between;
`;

export const MobileHeaderImgBox = styled.div`
  position: relative;
  padding: 7px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:active {
    background: ${(props) => props.theme.colors.darkHover};
  }
`;

export const MobileHeaderImgSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 24px;
`;
