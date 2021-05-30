import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core';
import App from './App';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
