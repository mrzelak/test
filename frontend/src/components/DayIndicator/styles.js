const SIZE = 20;

export default {
  circle: {
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    minHeight: SIZE,
    backgroundColor: 'white',
    border: (theme) => `3px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
    marginRight: 10,
    boxSizing: 'border-box',
  },
};
