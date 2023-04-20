import styled from "styled-components";

export const AdminModalBG = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.colors.black}b1;
  align-items: center;
  justify-content: center;
`;

export const AdminModal = styled.div`
  display: flex;
  padding: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 3px;
  box-shadow: ${(props) => props.theme.shadow.admin};
  flex-direction: column;
  gap: 20px;
`;
