import React from 'react';
import { useParams } from 'react-router-dom';
import mockedTasks from 'mocks/tasks';
import TaskDetailsView from './view';

const TaskDetailsContainer = () => {
  let params = useParams();
  const taskId = parseInt(params.taskId);

  let task = mockedTasks.find((element) => element.id == taskId);

  return <TaskDetailsView task={task} />;
};

export default TaskDetailsContainer;
