import styled from "styled-components";

export const PostFormBox = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const PostFormImgBox = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
`;

export const PostFormInfoBox = styled.div`
  display: flex;
  padding: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.adminDivider};
  flex-direction: column;
  gap: 10px;
`;

export const PostFormBtnBox = styled.div`
  grid-column: 1/3;
`;

export const PostFormBoxTit = styled.div`
  font-size: 1.6rem;
`;

export const PostFormImgInput = styled.div``;
