import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TaskDetailsView from './view';

const TaskDetailsContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const taskId = parseInt(params.taskId);

  const [task, setTask] = useState({
    name: '',
    description: '',
    date: null,
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

  const onTaskDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/task/${taskId}`);
      navigate('/application/tasks/list');
    } catch (err) {
      console.log(err);
    }
  };

  return <TaskDetailsView task={task} onTaskDelete={onTaskDelete} />;
};

export default TaskDetailsContainer;
