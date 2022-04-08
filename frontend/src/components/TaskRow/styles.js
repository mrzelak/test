export default {
  root: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (theme) => theme.spacing(0, 20),
    backgroundColor: 'white',
    border: (theme) => `1px solid ${theme.palette.neutral.main}`,
    boxSizing: 'border-box',
  },
  title: {
    flex: 1,
  },
  warning: { color: 'warning.main' },
  error: { color: 'error.main' },
};
