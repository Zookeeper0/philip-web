import styled from "styled-components";

export const PostItem = styled.li`
  position: relative;
  color: white;
  cursor: pointer;
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    background: ${(props) => props.theme.gradient.dark};
    transition: all 0.2s ease-in-out;
    z-index: 1;
  }

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.dark};

    &::before {
      opacity: 1;
    }
  }
`;

export const PostItemSpan = styled.span`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 16px;
  left: 16px;
  font-size: 2rem;
  opacity: 0;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  z-index: 2;

  ${PostItem}:hover & {
    opacity: 1;
  }

  span {
    color: ${(props) => props.theme.colors.subTxt};
    font-size: 1.4rem;
  }
`;
