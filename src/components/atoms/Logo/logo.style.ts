import styled from "styled-components";

interface LogoType {
  main?: boolean;
}

export const Logo = styled.div<LogoType>`
  width: ${(props) => (props.main ? "120px" : "90px")};
  height: ${(props) => (props.main ? "40px" : "30px")};

  a {
    display: flex;
    width: ${(props) => (props.main ? "120px" : "90px")};
    height: ${(props) => (props.main ? "40px" : "30px")};
  }
`;
