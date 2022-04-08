import PropTypes from 'prop-types';

const optionsShape = PropTypes.arrayOf(
  PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.string,
  })
);

export { optionsShape };
