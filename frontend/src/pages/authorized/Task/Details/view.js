import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import { DATETIME_FORMAT } from 'consts/dateFormats';
import { taskShape } from 'templates/DayTasks/shapes';
import { formatDate } from 'utils/dateUtils';

const TaskDetailsView = ({ task }) => {
  return (
    <Box>
      <Typography variant="h1" sx={{ marginBottom: 30 }}>
        Zadanie: {task.name}
      </Typography>
      <Box sx={{ marginBottom: 30 }}>
        <Typography variant="h2" sx={{ marginBottom: 20 }}>
          Opis
        </Typography>
        <Typography variant="h3">{task.description}</Typography>
      </Box>
      <Box sx={{ marginBottom: 30 }}>
        <Typography variant="h2" sx={{ marginBottom: 20 }}>
          Deadline
        </Typography>
        <Typography variant="h3">
          {formatDate(task.date, DATETIME_FORMAT)}
        </Typography>
      </Box>

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
