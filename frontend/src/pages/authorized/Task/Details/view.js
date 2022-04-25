import React from 'react';
import { Box } from '@mui/material';
import { taskShape } from 'templates/DayTasks/shapes';

const TaskDetailsView = ({ task }) => {
  return (
    <Box>
      <h1> Zadanie: {task.title} </h1>
      <div>
        <h2>Opis</h2>
        <p>{task.description}</p>
      </div>
      <div>
        <h2>Deadline</h2>
        <p>{task.datetime}</p>
      </div>
    </Box>
  );
};

TaskDetailsView.propTypes = {
  task: taskShape,
};

export default TaskDetailsView;
