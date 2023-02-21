import styled from "styled-components";

export const MainLayout = styled.div`
  display: grid;
  grid-template-areas:
    "BN BN BN BN"
    "CT CT CT AS"
    "CT CT CT AS";
  grid-template-columns: repeat(4, 295px);
  padding: 20px 0 60px;
  justify-content: center;
  gap: 20px;
`;
