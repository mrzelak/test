import React from 'react';
import TaskLIstView from './view';

const TaskListContainer = () => {
  const mockedTasks = [
    {
      id: 0,
      title: 'Posprzątać w domu',
      time: '16:00',
      severity: 'error',
    },
    {
      id: 1,
      title: 'Pozmywać naczynia',
      time: '17:00',
      severity: 'warning',
    },
    {
      id: 2,
      title: 'Wyprowadzić psa',
      time: '21:00',
    },
  ];

  const onTaskClick = (id) => {
    console.log(id);
  };

  return <TaskLIstView tasks={mockedTasks} onTaskClick={onTaskClick} />;
};

export default TaskListContainer;
