import styled, { css } from "styled-components";
import ImgWeb01 from "public/assets/images/image-region-web-01.png";
import ImgWeb02 from "public/assets/images/image-region-web-02.png";
import ImgWeb03 from "public/assets/images/image-region-web-03.png";
import ImgWeb01Disabled from "public/assets/images/image-region-web-disabled01.png";
import ImgWeb02Disabled from "public/assets/images/image-region-web-disabled02.png";
import ImgWeb03Disabled from "public/assets/images/image-region-web-disabled03.png";

interface ItemProps {
  item: number;
  disabled: boolean;
}

export const RegionItem = styled.li<ItemProps>`
  position: relative;
  display: flex;
  width: 400px;
  height: 450px;
  padding: 40px;
  color: white;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: flex-end;

  ${(props) =>
    props.disabled === false &&
    (props.item === 1
      ? css`
          background: url(${ImgWeb01?.src});
        `
      : props.item === 2
      ? css`
          background: url(${ImgWeb02?.src});
        `
      : props.item === 3 &&
        css`
          background: url(${ImgWeb03?.src});
        `)}

  ${(props) =>
    props.disabled === true &&
    (props.item === 1
      ? css`
          background: url(${ImgWeb01Disabled?.src});
        `
      : props.item === 2
      ? css`
          background: url(${ImgWeb02Disabled?.src});
        `
      : props.item === 3 &&
        css`
          background: url(${ImgWeb03Disabled?.src});
        `)}

  ${(props) =>
    props.disabled === true
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
        `}

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;

    ${(props) =>
      props.disabled === true
        ? css`
            background: ${(props) => props.theme.colors.black}cc;
          `
        : css`
            background: ${(props) => props.theme.gradient.dark};
          `}
  }

  &:hover {
    &::before {
      border: ${(props) =>
        props.disabled === false
          ? "8px solid" + props.theme.colors.primary
          : "none"};
    }
  }
`;

export const ItemTitBox = styled.div`
  display: relative;
  z-index: 2;
`;

export const ItemKR = styled.div`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: -0.1rem;
`;

export const ItemEN = styled.div`
  font-size: 2.4rem;
  letter-spacing: -0.1rem;
`;
