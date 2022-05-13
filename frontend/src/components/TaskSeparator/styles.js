const SIZE = 6;

export default {
  circle: {
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    minHeight: SIZE,
    backgroundColor: 'white',
    border: (theme) => `2px solid ${theme.palette.neutral.main}`,
    borderRadius: '50%',
    marginRight: 10,
    boxSizing: 'border-box',
  },
};
