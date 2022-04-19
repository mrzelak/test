import React from 'react';
import mockedTasks from 'mocks/tasks';
import { getMappedTasks } from './utils';
import TaskLIstView from './view';

const TaskListContainer = () => {
  const onTaskClick = (id) => {
    console.log('Task clicked: ', id);
  };

  const onTaskCheck = (id) => {
    console.log('Task checked: ', id);
  };

  return (
    <TaskLIstView
      tasks={getMappedTasks(mockedTasks)}
      onTaskClick={onTaskClick}
      onTaskCheck={onTaskCheck}
    />
  );
};

export default TaskListContainer;
