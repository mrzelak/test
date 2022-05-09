import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { get } from 'lodash';
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

  const onSubmit = async (values) => {
    try {
      if (isEdit) {
        await axios.put(`${process.env.REACT_APP_API_URL}/task/${taskId}`, {
          name: values.name,
          description: values.description,
          date: new Date(values.date),
          subTasks: values.subTasks,
        });
      } else {
        await axios.post(`${process.env.REACT_APP_API_URL}/task`, {
          name: values.name,
          description: values.description,
          date: new Date(values.date),
          subTasks: values.subTasks,
        });
      }

      navigate('/application/tasks/list');
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
      subTasks: get(task, 'subTasks', []),
    };
  }, [task, isEdit]);

  return (
    <TaskAddEditView
      isEdit={isEdit}
      onSubmit={onSubmit}
      initialValues={initialValues}
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
