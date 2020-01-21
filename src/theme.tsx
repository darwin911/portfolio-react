import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Recursive',
      'Roboto Mono',
      'Roboto',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif'
    ].join(',')
  },
  palette: {
    background: {
      default: '#1b1b1b'
    }
  }
});

export default theme;
