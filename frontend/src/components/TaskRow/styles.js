export default (isDone) => ({
  root: {
    width: '100%',
    minWidth: 400,
    height: 50,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (theme) => theme.spacing(0, 20),
    backgroundColor: 'white',
    border: (theme) => `1px solid ${theme.palette.neutral.main}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    ...(isDone && { opacity: 0.4 }),
  },
  title: {
    flex: 1,
  },
  warning: { color: 'warning.main' },
  error: { color: 'error.main' },
});
