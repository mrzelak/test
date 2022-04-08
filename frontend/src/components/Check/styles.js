export default (checked) => ({
  root: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    backgroundColor: 'white',
    border: (theme) => `3px solid ${theme.palette.neutral.main}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...(checked && { borderColor: 'primary.main' }),
  },
  insideDot: {
    width: 12,
    minWidth: 12,
    height: 12,
    minHeight: 12,
    backgroundColor: 'primary.main',
    borderRadius: '50%',
  },
});
