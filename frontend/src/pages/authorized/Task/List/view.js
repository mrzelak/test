import React from 'react';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import TaskRow from 'components/TaskRow';
import { severityShape } from 'components/TaskRow/shapes';

const TaskListView = ({ tasks, onTaskClick }) => {
  return (
    <Box>
      {_map(tasks, (task) => (
        <TaskRow
          key={task.id}
          isDone={task.id % 2 == 0} // TODO get from API
          onClick={() => onTaskClick(task.id)}
          title={task.title}
          time={task.time}
          severity={task.severity}
          sx={{ marginBottom: 5 }}
        />
      ))}
    </Box>
  );
};

TaskListView.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      time: PropTypes.string,
      severity: severityShape,
    })
  ),
  onTaskClick: PropTypes.func,
};

TaskListView.defaultProps = {
  tasks: [],
  onTaskClick: _noop,
};

export default TaskListView;
