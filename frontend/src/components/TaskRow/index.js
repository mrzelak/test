import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Check from 'components/Check';
import styles from './styles';

const TaskRow = ({ isDone, title, time, severity }) => {
  return (
    <Box sx={styles.root}>
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
  severity: PropTypes.oneOf(['default', 'error', 'warning']),
};

TaskRow.defaultProps = {
  severity: 'default',
  isDone: false,
};

export default TaskRow;
