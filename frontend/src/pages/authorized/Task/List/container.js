import React from 'react';
import { useNavigate } from 'react-router-dom';
import mockedTasks from 'mocks/tasks';
import { getMappedTasks } from './utils';
import TaskLIstView from './view';

const TaskListContainer = () => {
  const navigate = useNavigate();

  const onTaskClick = (task) => {
    console.log('Task clicked: ', task.id);
    navigate(`/application/tasks/${task.id}`, { state: { task: task } });
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
