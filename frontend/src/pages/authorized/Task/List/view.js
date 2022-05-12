import React from 'react';
import map from 'lodash/map';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DayTasks from 'templates/DayTasks';
import TaskSeparator from 'components/TaskSeparator';
import { tasksWithDateShape } from './shapes';
import { toInteger } from 'lodash';
import differenceInDays from 'date-fns/fp/differenceInDays';
import { DATE_FORMAT } from 'consts/dateFormats';
import { formatDate } from 'utils/dateUtils';

const TaskListView = ({ tasks, onTaskClick, onTaskCheck }) => {
  return (
    <Box>
      {map(tasks, (entry, index) => (
        <Box sx={{ marginBottom: 40 }} key={entry.id}>
          <DayTasks
            date={entry.date}
            tasks={entry.tasks}
            onTaskClick={onTaskClick}
            onTaskCheck={onTaskCheck}
          />
          <Box>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',height: '3vh',}}>
              <Box sx={{ marginTop: 30, width: 150 }}>
                <TaskSeparator value={differenceInDays(tasks[index].date, tasks?.[index+1]?.date)} /> 
              </Box>
             </div>
          </Box>
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
