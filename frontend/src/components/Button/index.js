import React from 'react';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Button as MUIButton } from '@mui/material';
import getStyles from './styles';

const Button = ({ color, onClick, children, submit }) => {
  const styles = getStyles(color);

  return (
    <MUIButton
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      variant="contained"
      sx={styles.root}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary']),
  submit: PropTypes.bool,
};

Button.defaultProps = {
  onClick: _noop,
  color: 'primary',
  submit: false,
};

export default Button;
