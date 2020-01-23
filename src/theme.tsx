import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'sofia-pro',
      'Recursive',
      'Roboto Mono',
      'Roboto',
      'Helvetica Neue',
      'Helvetica',
      'sans-serif'
    ].join(', ')
  },
  palette: {
    background: {
      default: '#f6f6f6'
    }
  }
});

export default theme;
