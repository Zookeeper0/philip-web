import styled from "styled-components";

interface BannerProps {
  order: string;
}

export const Banner = styled.div<BannerProps>`
  grid-area: ${(props) => props.order};
  display: flex;
  color: white;
  font-size: 1.7rem;
  background: ${(props) => props.theme.colors.dark};
  align-items: center;
  justify-content: center;
`;
