import React from 'react';
import { Box } from '@mui/material';
import { taskShape } from 'templates/DayTasks/shapes';

const TaskDetailsView = ({ task }) => {
  return (
    <Box>
      <h1> id: {task.id} </h1>
    </Box>
  );
};

TaskDetailsView.propTypes = {
  task: taskShape,
};

export default TaskDetailsView;
