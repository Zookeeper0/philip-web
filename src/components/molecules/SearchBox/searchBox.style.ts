import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  min-height: 450px;
  padding: 30px;
  background: ${(props) => props.theme.colors.searchBarBg};
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
