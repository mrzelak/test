import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getMappedTasks } from './utils';
import TaskLIstView from './view';

const TaskListContainer = () => {
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
