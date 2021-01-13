import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, theme, GlobalStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
