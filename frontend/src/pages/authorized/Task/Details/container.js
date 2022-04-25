import React from 'react';
import { useLocation } from 'react-router-dom';
import TaskDetailsView from './view';

const TaskDetailsContainer = () => {
  const { state } = useLocation();
  const { task } = state;

  return <TaskDetailsView task={task} />;
};

export default TaskDetailsContainer;
