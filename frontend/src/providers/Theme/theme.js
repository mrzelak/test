const colors = {
  primary: {
    contrastText: 'white',
    light: '#BEE6FD',
    main: '#43A6DE',
    dark: '#187AB1',
  },
  secondary: {
    contrastText: 'white',
    light: '#ffe180',
    main: '#c79f1e',
    dark: '#80650d',
  },
  neutral: {
    light: '#E1E1E1',
    main: '#E1E1E1',
    dark: '#CBCBCB',
  },
  error: {
    main: '#DE4343',
  },
  warning: {
    main: '#C69C07',
  },
  white: '#FFFFFF',
  black: '#000000',
  background: '#F6F6F6',
};

const common = {
  spacing: 1,
  fontSize: {
    tiny: 10,
    small: 12,
    medium: 14,
    big: 16,
    huge: 20,
  },
};

const theme = {
  ...common,
  palette: colors,
};

export default theme;
