import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = ({ field, error, helperText, label, sx, ...props }) => (
  <TextField
    {...field}
    {...props}
    label={label}
    error={!_isEmpty(error)}
    helperText={error || helperText}
    variant="outlined"
    sx={{
      width: '100%',
      ...sx,
    }}
    FormHelperTextProps={{
      sx: {
        margin: 0,
      },
    }}
  />
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.any),
};

Input.defaultProps = {
  error: '',
  helperText: '',
  sx: {},
};

export default Input;
