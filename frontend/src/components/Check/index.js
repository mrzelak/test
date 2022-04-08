import React from 'react';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';

const Check = ({ checked, onClick, sx }) => {
  return (
    <Box
      sx={{
        width: 17,
        minWidth: 17,
        height: 17,
        minHeight: 17,
        backgroundColor: 'white',
        border: (theme) => `3px solid ${theme.palette.neutral.main}`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(checked && { borderColor: 'primary.main' }),
        ...sx,
      }}
      onClick={onClick}
    >
      {checked && (
        <Box
          sx={{
            width: 12,
            minWidth: 12,
            height: 12,
            minHeight: 12,
            backgroundColor: 'primary.main',
            borderRadius: '50%',
          }}
        />
      )}
    </Box>
  );
};

Check.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.object,
};

Check.defaultProps = {
  checked: false,
  onClick: _noop,
  sx: {},
};

export default Check;
