import React from 'react';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MUISelect,
} from '@mui/material';
import { optionsShape } from './shapes';

const Select = ({ field, error, helperText, label, options, sx, ...props }) => (
  <FormControl
    fullWidth
    error={!isEmpty(error)}
    sx={{
      width: '100%',
      ...sx,
    }}
  >
    <InputLabel>{label}</InputLabel>
    <MUISelect
      {...field}
      {...props}
      label={label}
      onChange={(event) => {
        field.onChange(event);
      }}
    >
      {map(options, ({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </MUISelect>
    {!isEmpty(error) ||
      (!isEmpty(helperText) && (
        <FormHelperText>{error || helperText}</FormHelperText>
      ))}
  </FormControl>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.any,
  error: PropTypes.string,
  helperText: PropTypes.string,
  options: optionsShape.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

Select.defaultProps = {
  error: '',
  helperText: '',
  sx: {},
};

export default Select;
