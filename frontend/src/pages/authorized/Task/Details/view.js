import React from 'react';
import { Box } from '@mui/material';
import Button from 'components/Button';
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

      <Button
        onClick={() => console.log(`edit ${task.id}`)}
        sx={{ marginTop: 20 }}
      >
        Edytuj zadanie
      </Button>

      <Button
        onClick={() => console.log(`delete ${task.id}`)}
        sx={{ marginTop: 20, marginLeft: 20 }}
      >
        Usuń zadanie
      </Button>
    </Box>
  );
};

TaskDetailsView.propTypes = {
  task: taskShape,
};

export default TaskDetailsView;
