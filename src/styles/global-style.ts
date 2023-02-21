import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  letter-spacing: -0.5px;
  background: #212121;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}

ul, li {
  padding: 0;
  margin: 0; 
  list-style: none;
}

* {
  box-sizing: border-box;
}
`;
