import React from 'react';
import { useParams } from 'react-router-dom';
import mockedTasks from 'mocks/tasks';
import TaskDetailsView from './view';

const TaskDetailsContainer = () => {
  let params = useParams();

  let task = mockedTasks.find((element) => element.id == parseInt(params.taskId));

  return <TaskDetailsView task={task} />;
};

export default TaskDetailsContainer;
