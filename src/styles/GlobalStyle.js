import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  html, body, #root{
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
