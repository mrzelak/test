export default (isDone) => ({
  root: {
    width: '100%',
    minWidth: 350,
    maxWidth: 500,
    height: 30,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 20,
    backgroundColor: 'white',
    border: (theme) => `1px solid ${theme.palette.neutral.main}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    ...(isDone && { opacity: 0.4 }),
  },
  title: {
    flex: 1,
    marginTop: 2,
  },
});
