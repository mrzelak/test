export default {
  root: {
    width: 100,
    height: 100,
    borderRadius: 10,
    border: (theme) =>
      `${theme.spacing(1)} solid ${theme.palette.neutral.main}`,
    backgroundColor: (theme) => theme.palette.white,
    color: (theme) => theme.palette.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  icon: {
    width: 50,
    height: 50,
    color: (theme) => theme.palette.black,
  },
  iconActive: {
    color: (theme) => theme.palette.white,
  },
  title: {
    textTransform: 'uppercase',
  },
  active: {
    border: (theme) =>
      `${theme.spacing(3)} solid ${theme.palette.primary.main}`,
    backgroundColor: (theme) => theme.palette.primary.dark,
    color: (theme) => theme.palette.white,
  },
};
