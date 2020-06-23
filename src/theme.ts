import { createMuiTheme } from '@material-ui/core/styles';
import { darken, lighten } from 'polished';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = '#da1921';

export const customTheme = {
  font: {
    size: {
      small: '.8rem',
      medium: '1rem'
    }
  },
  dimension: {
    radius: {
      small: '0.3rem'
    },
    font: {
      bold: 800
    },
    height: {
      small: '1rem',
      medium: '13rem',
      day_calendar_height: '2.5rem'
    },
    width: {
      small: '1rem',
      day_calendar_width: '2.5rem',
      w100: '100%',
      w50: '50%'
    },
  },
  spacing: {
    margin: {
      none: 0,
      smaller1: '.2rem',
      smaller: '.5rem',
      small: '1rem',
      medium: '1.5rem',
      big: '2rem',
      bigger: '4rem',
      m5: '5%',
      m10: '10%',
    },
    padding: {
      none: 0,
      smaller: '.5rem',
      small: '1rem',
      medium: '1.5rem',
      big: '2rem',
    },
  },
  color: {
    primary,
    foreground: '#707070',
    background: '#ffffff',
    primaryAccent: lighten(0.1, primary),
    primaryShade1: lighten(0.2, primary),
    primaryShade2: lighten(0.27, primary),
    primaryShade3: lighten(0.37, primary),
    primaryShade4: lighten(0.43, primary),
    primaryDark: darken(0.1, primary),
    secondary: darken(0.14, primary),
    white: '#ffffff',
    black: '#000000',
    grayLight1: '#f2f2f2',
    grayLight2: '#dfdfdf',
    grayLight3: '#707070',
    grayLight4: '#ccc',
    grayDark1: '#f4f2f2',
    grayDark2: '#f0eeee',
    grayDark3: '#ccc',
    grayDark4: '#bbb',
  },
};

export default customTheme;

const palette: PaletteOptions = {
  primary: { main: '#da1921', contrastText: '#FAFAFA' },
  secondary: { main: '#FFCCBC', contrastText: '#757575' },
  text: { primary: '#707070' },
  background: {
    default: '#FFFFFF',
    paper: '#FFFFFF',
  },
};

const title = {
  fontFamily: 'Lato',
  fontWeight: 500,
};

export const theme = createMuiTheme({
  palette: palette,
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 5,
      },
      outlinedPrimary: {
        '&:hover': {
          backgroundColor: primary,
          color: palette.background!!.paper,
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji',
    ].join(','),
    h1: {
      ...title,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      ...title,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      ...title,
      fontSize: '1.5rem',
      lineHeight: 1,
    },
    h4: {
      ...title,
      fontSize: '1.25rem',
      lineHeight: 1,
    },
    h5: {
      ...title,
      fontSize: '1rem',
      lineHeight: 1,
    },
    button: {
      fontSize: '1rem',
      textTransform: 'unset',
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 300,
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});
