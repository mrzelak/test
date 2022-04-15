import React from 'react';
import map from 'lodash/map';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DayTasks from 'templates/DayTasks';
import { tasksWithDateShape } from './shapes';

const TaskListView = ({ tasks, onTaskClick, onTaskCheck }) => {
  return (
    <Box>
      {map(tasks, (entry) => (
        <Box sx={{ marginBottom: 20 }} key={entry.id}>
          <DayTasks
            date={entry.date}
            tasks={entry.tasks}
            onTaskClick={onTaskClick}
            onTaskCheck={onTaskCheck}
          />
        </Box>
      ))}
    </Box>
  );
};

TaskListView.propTypes = {
  tasks: tasksWithDateShape,
  onTaskClick: PropTypes.func,
  onTaskCheck: PropTypes.func,
};

TaskListView.defaultProps = {
  tasks: [],
  onTaskClick: noop,
  onTaskCheck: noop,
};

export default TaskListView;
