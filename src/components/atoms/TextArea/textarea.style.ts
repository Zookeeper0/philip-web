import styled, { css } from "styled-components";

interface InputProps {
  width?: string;
  size?: string;
  themeType?: string;
}

export const InputCommon = styled.div<InputProps>`
  display: flex;

  label {
    display: flex;
    width: ${(props) => (props.width ? props.width : "initial")};
    font-size: 1.2rem;
    align-items: center;
    gap: 5px 10px;

    .displayValue {
      font-size: 1.4rem;
    }
  }

  input,
  select {
    width: ${(props) => (props.width ? props.width : "initial")};
    height: ${(props) =>
      props.size === "sm"
        ? "24px"
        : props.size === "md"
        ? "30px"
        : props.size === "lg"
        ? "48px"
        : "unset"};
    padding: ${(props) =>
      props.size === "sm" || props.size === "md"
        ? "0 6px 2px"
        : props.size === "lg"
        ? "0 15px"
        : "0"};
    font-size: ${(props) => (props.size === "lg" ? "1.5rem;" : "1.3rem;")};
  }

  ${(props) =>
    props.themeType === "row" &&
    css`
      label {
        color: white;

        input,
        select {
          color: white;
          background: ${(props) => props.theme.colors.inputDarkBg};
          border: none;
          border-bottom: 1px solid
            ${(props) => props.theme.colors.inputDarkBorder};
          border-radius: 3px 3px 0 0;
        }
      }
    `}

  ${(props) =>
    props.themeType === "column" &&
    css`
      label {
        color: white;
        flex-direction: column;
        align-items: flex-start;
      }
    `}
`;