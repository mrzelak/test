import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TaskDetailsView from './view';

const TaskDetailsContainer = () => {
  let params = useParams();
  let taskId = parseInt(params.taskId);

  const [task, setTask] = useState({
    name: '',
    description: '',
    date: '2000-01-01T00:00:00.154Z',
  });

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/task/${taskId}`
        );
        const task = res.data;
        setTask(task);
      } catch (err) {
        console.log(err);
      }
    };

    getTask();
  }, [taskId]);

  return <TaskDetailsView task={task} />;
};

export default TaskDetailsContainer;
