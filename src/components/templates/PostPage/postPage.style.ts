import styled from "styled-components";

export const PostLayout = styled.div`
  display: grid;
  grid-template-areas:
    "BN BN BN BN"
    "PS PS PS PS"
    "PS PS PS PS";
  grid-template-columns: repeat(4, 295px);
  padding: 20px 0 60px;
  justify-content: center;
  gap: 20px;
`;
