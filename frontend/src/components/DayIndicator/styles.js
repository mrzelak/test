const SIZE = 10;

export default {
  circle: {
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    minHeight: SIZE,
    backgroundColor: (theme) => theme.palette.primary.main,
    borderRadius: '50%',
    marginRight: 10,
    boxSizing: 'border-box',
  },
};
