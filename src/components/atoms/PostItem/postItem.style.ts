import styled from "styled-components";

export const PostItem = styled.li`
  position: relative;
  width: 220px;
  height: 140px;
  color: white;
  cursor: pointer;
  z-index: 0;

  // 임시게시글 디자인(사진X)
  background: ${(props) => props.theme.colors.dark};

  // &::before {
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   opacity: 1;
  //   background: ${(props) => props.theme.gradient.dark};
  //   transition: all 0.2s ease-in-out;
  //   z-index: 1;
  // }

  // &:hover {
  //   box-shadow: ${(props) => props.theme.shadow.dark};

  //   &::before {
  //     opacity: 1;
  //   }
  // }

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    width: calc(33% - 6px);
    height: 70px;
  }
`;

export const PostItemSpan = styled.span`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 16px;
  left: 16px;
  // font-size: 2rem;
  opacity: 1;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  z-index: 2;

  // 임시게시글 디자인(사진X)
  font-size: 2.6rem;
  gap: 2px;

  // ${PostItem}:hover & {
  //   opacity: 1;
  // }

  span {
    color: ${(props) => props.theme.colors.subTxt};
    // font-size: 1.4rem;

    // 임시게시글 디자인(사진X)
    font-size: 1.8rem;
  }

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    // font-size: 1.6rem;

    // 임시게시글 디자인(사진X)
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    gap: 0;

    span {
      display: none;
      // font-size: 1.3rem;
    }
  }
`;
