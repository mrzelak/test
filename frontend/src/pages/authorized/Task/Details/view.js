import React from 'react';
import { isEmpty, map, noop } from 'lodash';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button';
import SubTask from 'components/SubTask';
import { DATETIME_FORMAT } from 'consts/dateFormats';
import { taskShape } from 'templates/DayTasks/shapes';
import { formatDate } from 'utils/dateUtils';

const TaskDetailsView = ({
  task,
  onTaskDelete,
  onTaskEdit,
  onSubTaskCheck,
}) => {
  const sectionStyles = { marginBottom: 30 };
  const sectionTitleStyle = { marginBottom: 20 };

  return (
    <Box>
      <Typography variant="h1" sx={sectionStyles}>
        Zadanie: {task.name}
      </Typography>
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={sectionTitleStyle}>
          Opis
        </Typography>
        <Typography variant="h3">{task.description}</Typography>
      </Box>
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={sectionTitleStyle}>
          Deadline
        </Typography>
        <Typography variant="h3">
          {formatDate(task.date, DATETIME_FORMAT)}
        </Typography>
      </Box>

      {!isEmpty(task.subTasks) && (
        <Box sx={sectionStyles}>
          <Typography variant="h2" sx={sectionTitleStyle}>
            Podzadania
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 10 }}>
            {map(task.subTasks, (subtask) => (
              <SubTask
                key={subtask.id}
                title={subtask.name}
                isDone={subtask.finished}
                onCheck={() => onSubTaskCheck(subtask.id)}
              />
            ))}
          </Box>
        </Box>
      )}

      <Button onClick={onTaskEdit} sx={{ marginTop: 20 }}>
        Edytuj zadanie
      </Button>

      <Button onClick={onTaskDelete} sx={{ marginTop: 20, marginLeft: 20 }}>
        Usuń zadanie
      </Button>
    </Box>
  );
};

TaskDetailsView.propTypes = {
  task: taskShape,
  onTaskDelete: PropTypes.func,
  onTaskEdit: PropTypes.func,
  onSubTaskCheck: PropTypes.func,
};

TaskDetailsView.defaultProps = {
  onTaskDelete: noop,
  onTaskEdit: noop,
  onSubTaskCheck: noop,
};

export default TaskDetailsView;
