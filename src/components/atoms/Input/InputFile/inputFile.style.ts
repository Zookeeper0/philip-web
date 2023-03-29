import styled, { css } from "styled-components";

interface InputFileProps {
  multiple: boolean;
}

export const InputFile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const FileLabelBox = styled.div<InputFileProps>`
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  gap: 10px;

  ${(props) =>
    props.multiple &&
    css`
      padding: 15px 0;
      color: ${(props) => props.theme.colors.adminLabelTxt};
      border: 1px solid ${(props) => props.theme.colors.adminInputBorder};
      background: ${(props) => props.theme.colors.adminInputBg};
      justify-content: center;
      flex-direction: column;
    `}

  label {
    display: flex;
    width: 90px;
    height: 35px;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.func};
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.funcHover};
    }
  }
`;

export const ImgPreviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const ImgPreviewItem = styled.li`
  overflow: hidden;
  position: relative;
  width: 220px;
  height: 140px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.adminInputBorder};
`;
