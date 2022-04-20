export default () => ({
  root: {
    minWidth: 120,
    height: 50,
    borderRadius: 50,
    color: (theme) => theme.palette.primary.contrastText,
    textTransform: 'none',
    backgroundColor: (theme) => theme.palette.primary.main,
    '&:hover': {
      backgroundColor: (theme) => theme.palette.primary.dark,
    },
  },
  small: {
    height: 35,
  },
});
