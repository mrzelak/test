import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Button as MUIButton, Typography } from '@mui/material';
import getStyles from './styles';

const Button = ({ size, onClick, children, submit }) => {
  const styles = getStyles();

  return (
    <MUIButton
      type={submit ? 'submit' : undefined}
      onClick={onClick}
      variant="contained"
      sx={{ ...styles.root, ...(size === 'small' && styles.small) }}
    >
      <Typography variant={size === 'small' ? 'h3' : 'h2'}>
        {children}
      </Typography>
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'big']),
  submit: PropTypes.bool,
};

Button.defaultProps = {
  onClick: noop,
  size: 'big',
  submit: false,
};

export default Button;
