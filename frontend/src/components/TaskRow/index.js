import React from 'react';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Check from 'components/Check';
import { severityShape } from './shapes';
import getStyles from './styles';

const TaskRow = ({ isDone, title, time, severity, onClick, sx }) => {
  const styles = getStyles(isDone);
  return (
    <Box sx={{ ...styles.root, ...sx }} onClick={onClick}>
      <Check checked={isDone} sx={{ marginRight: 10 }} />
      <Box sx={styles.title}>{title}</Box>
      <Box
        sx={{
          ...(severity === 'warning' && styles.warning),
          ...(severity === 'error' && styles.error),
        }}
      >
        {time}
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
  sx: PropTypes.object,
};

TaskRow.defaultProps = {
  severity: 'default',
  isDone: false,
  onClick: _noop,
  sx: {},
};

export default TaskRow;
