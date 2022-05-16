import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { get, map } from 'lodash';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { INPUT_FORMAT } from 'consts/dateFormats';
import useUnauthorizedHandler from 'hooks/useUnauthorizedHandler';
import { formatDate } from 'utils/dateUtils';
import { initialTaskData } from './consts';
import TaskAddEditView from './view';

const TaskAddEditContainer = ({ isEdit }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { handleUnauthorized } = useUnauthorizedHandler();
  const taskId = parseInt(params.taskId);

  const [task, setTask] = useState(initialTaskData);
  const [availableTasks, setAvailableTasks] = useState([]);

  useEffect(() => {
    if (!isEdit) {
      setTask(initialTaskData);
    }
  }, [isEdit]);

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/task/${taskId}`
        );
        const task = res.data;
        setTask(task);
      } catch (err) {
        handleUnauthorized(err);
      }
    };

    if (isEdit) {
      getTask();
    }
  }, [taskId]);

  useEffect(() => {
    const getAvailableTasks = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/task`);
        const availableTasks = map(res.data, (task) => ({
          value: task.id,
          label: task.name,
        }));
        setAvailableTasks(availableTasks);
      } catch (err) {
        console.log(err);
      }
    };

    getAvailableTasks();
  }, []);

  const onSubmit = async (values) => {
    const data = {
      ...values,
      date: new Date(values.date),
    };
    try {
      if (isEdit) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/task/${taskId}`,
          data
        );
        navigate(`/application/tasks/${taskId}`);
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/task`, data);
        navigate('/application/tasks/list');
      }
    } catch (err) {
      handleUnauthorized(err);
    }
  };

  const initialValues = useMemo(() => {
    const date = formatDate(get(task, 'date', ''), INPUT_FORMAT);

    return {
      name: get(task, 'name', ''),
      description: get(task, 'description', ''),
      date,
      previousTasks: map(get(task, 'previousTasks', []), (task) => ({
        id: task.id,
      })),
      subTasks: map(get(task, 'subTasks', []), (subtask) => ({
        name: subtask.name,
      })),
    };
  }, [task, isEdit]);

  return (
    <TaskAddEditView
      isEdit={isEdit}
      onSubmit={onSubmit}
      initialValues={initialValues}
      availableTasks={availableTasks}
    />
  );
};

TaskAddEditContainer.propTypes = {
  isEdit: PropTypes.bool,
};

TaskAddEditContainer.defaultProps = {
  isEdit: false,
};

export default TaskAddEditContainer;
