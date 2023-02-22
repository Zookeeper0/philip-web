import styled, { css } from "styled-components";

interface LogoType {
  main?: boolean;
  mobile?: boolean;
}

export const Logo = styled.div<LogoType>`
  width: ${(props) => (props.mobile ? "auto" : props.main ? "120px" : "90px")};
  height: ${(props) => (props.mobile ? "auto" : props.main ? "40px" : "30px")};
  padding: ${(props) => (props.mobile ? "7px 10px;" : "0")};

  ${(props) =>
    props.mobile &&
    css`
      padding: 7px 10px;

      &:active {
        background: ${(props) => props.theme.colors.darkHover};
      }
    `}

  a {
    display: flex;
    width: ${(props) =>
      props.mobile ? "70px" : props.main ? "120px" : "90px"};
    height: ${(props) =>
      props.mobile ? "24px" : props.main ? "40px" : "30px"};
  }
`;
