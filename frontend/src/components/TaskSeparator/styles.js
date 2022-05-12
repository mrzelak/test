const SIZE = 3;

export default {
  circle: {
    width: SIZE,
    minWidth: SIZE,
    height: SIZE,
    minHeight: SIZE,
    backgroundColor: 'grey',
    border: (theme) => `2px solid #808080`,
    borderRadius: '50%',
    marginRight: 10,
    boxSizing: 'border-box',
  },
};
