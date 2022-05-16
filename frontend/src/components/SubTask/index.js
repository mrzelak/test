import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Check from 'components/Check';
import getStyles from './styles';

const SubTask = ({ isDone, title, onCheck, sx }) => {
  const styles = getStyles(isDone);

  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Check checked={isDone} onClick={onCheck} sx={{ marginRight: 15 }} />
      <Typography variant="h4" sx={styles.title} noWrap>
        {title}
      </Typography>
    </Box>
  );
};

SubTask.propTypes = {
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onCheck: PropTypes.func,
  sx: PropTypes.object,
};

SubTask.defaultProps = {
  isDone: false,
  onCheck: noop,
  sx: {},
};

export default SubTask;
