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
      props.size === "sm" ? "24px" : props.size === "md" ? "30px" : "unset"};
    padding: ${(props) => (props.size ? "0 6px 2px" : "0")};
    font-size: 1.3rem;
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
          border-radius: 2px 2px 0 0;
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
