import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Check from 'components/Check';
import { severityShape } from './shapes';
import getStyles from './styles';

const TaskRow = ({ isDone, title, time, severity, onClick, onCheck, sx }) => {
  const styles = getStyles(isDone);

  const handleCheck = (event) => {
    event.stopPropagation();
    onCheck();
  };

  return (
    <Box sx={{ ...styles.root, ...sx }} onClick={onClick}>
      <Check checked={isDone} onClick={handleCheck} sx={{ marginRight: 20 }} />
      <Typography variant="h3" sx={styles.title}>
        {title}
      </Typography>
      <Box
        sx={{
          ...(severity === 'warning' && styles.warning),
          ...(severity === 'error' && styles.error),
        }}
      >
        <Typography variant="h4" sx={styles.title}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

TaskRow.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  severity: severityShape,
  onClick: PropTypes.func,
  onCheck: PropTypes.func,
  sx: PropTypes.object,
};

TaskRow.defaultProps = {
  severity: 'default',
  isDone: false,
  onClick: noop,
  onCheck: noop,
  sx: {},
};

export default TaskRow;
