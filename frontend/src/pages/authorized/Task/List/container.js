import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { findIndex } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { getMappedTasks } from './utils';
import TaskLIstView from './view';
import UserManager from 'managers/UserManager';

const TaskListContainer = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/task`,
          { headers: { Authorization: UserManager.getToken() } });
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

  const onTaskCheck = async (taskId) => {
    try {
      const taskIndex = findIndex(tasks, ({ id }) => id === taskId);
      const checked = !tasks[taskIndex].finished;
      const endpoint = checked ? 'check' : 'uncheck';
      await axios.put(
        `${process.env.REACT_APP_API_URL}/task/${taskId}/${endpoint}`
      );
      const newTasks = [...tasks];
      newTasks[taskIndex].finished = checked;
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
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
