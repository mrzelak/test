export default () => ({
  root: {
    minWidth: 140,
    height: 50,
    borderRadius: 50,
    color: (theme) => theme.palette.secondary.contrastText,
    textTransform: 'none',
    backgroundColor: (theme) => theme.palette.secondary.main,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
    color: (theme) => theme.palette.white,
  },
});
