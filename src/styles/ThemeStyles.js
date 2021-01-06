import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import '../index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[400],
    },
    secondary: {
      main: orange[400],
    }
  },
  typography: {
    //title
    fontFamily: 'Muli',
    h1: {
      fontFamily: 'Merriweather',
      fontSize: '25px',
      fontWeight: 600,
      color: grey[800],
    },
    //subHeader
    h2: {
      fontSize: '18px',
      fontWeight: 700,
    },
    //body
    h3: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.54)',
    },
  },
});

export default theme;
