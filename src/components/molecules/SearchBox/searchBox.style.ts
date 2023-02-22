import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  min-height: 450px;
  padding: 30px;
  background: ${(props) => props.theme.colors.searchBarBg};
  flex-direction: column;
  justify-content: space-between;

  //모바일 화면 설정
  @media screen and (max-width: 768px) {
    min-height: unset;
    padding: 16px;
    background: none;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchMobileInput = styled.div`
  display: flex;
  gap: 8px;
`;
