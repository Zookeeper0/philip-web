import styled, { css } from "styled-components";

interface ButtonGroupProps {
  width?: string;
  marginTop?: number;
  marginBottom?: number;
  alignItems?: string;
  justifyContent?: string;
}

interface ButtonProps {
  width?: string;
  height?: number;
  size?: string;
  color: string;
  layout: string;
}

export const ButtonGroup = styled.div<ButtonGroupProps>`
  grid-area: BT;
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "px" : "0")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : "0"};
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "initial")};
  color: ${(props) =>
    props.color === "kakaoBg" ? props.theme.colors.kakaoTxt : "white"};
  font-size: ${(props) =>
    props.height && props.height >= 32 ? "1.6rem" : "1.2rem"};
  border: none;
  border-radius: ${(props) => (props.layout === "icon" ? "2px" : "0")};
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
  background: ${(props) =>
    props.color === "clear" ? "none" : props.theme.colors[props.color]};

  ${(props) =>
    props.size === "sm" &&
    css`
      height: 24px;
      padding: 0 10px;
      font-size: 1.1rem;
    `}

  ${(props) =>
    props.layout === "function" &&
    css`
      opacity: 0.6;

      &:disabled {
        opacity: 0;
      }
    `}

    ${(props) =>
    props.color === "kakaoBg" &&
    css`
      font-size: 1.7rem;
      font-weight: 500;
    `}

  &:hover {
    background: ${(props) =>
      props.color === "clear"
        ? props.theme.colors.darkHover
        : props.theme.colors[props.color + "Hover"]};

    ${(props) =>
      props.layout === "function" &&
      css`
        opacity: 1;

        &:disabled {
          opacity: 0;
        }
      `}
  }

  &:disabled {
    cursor: default;
    background: ${(props) =>
      props.color === "clear" ? "none" : props.theme.colors.disabledBtn};

    &:hover {
      background: ${(props) =>
        props.color === "clear" ? "none" : props.theme.colors.disabledBtn};
    }
    svg {
      path {
        stroke: ${(props) => props.theme.colors.white}66;
      }
    }
  }
`;
