import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getMappedTasks } from './utils';
import TaskLIstView from './view';

const TaskListContainer = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/task`);
        const tasks = res.data;
        setTasks(tasks);
      } catch (err) {
        console.log(err);
      }
    };

    getTasks();
  }, []);

  const onTaskClick = (id) => {
    console.log('Task clicked: ', id);
    navigate(`/application/tasks/${id}`);
  };

  const onTaskCheck = (id) => {
    console.log('Task checked: ', id);
  };

  return (
    <TaskLIstView
      tasks={getMappedTasks(tasks)}
      onTaskClick={onTaskClick}
      onTaskCheck={onTaskCheck}
    />
  );
};

export default TaskListContainer;
