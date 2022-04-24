import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { initialValues } from './consts';
import TaskAddEditView from './view';

const TaskAddEditContainer = ({ isEdit }) => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/task`, {
        name: values.name,
        description: values.description,
        date: new Date(values.date),
      });

      navigate('/application/tasks/list');
    } catch (err) {
      console.log(err);
    }
  };

  return <TaskAddEditView onSubmit={onSubmit} initialValues={initialValues} />;
};

TaskAddEditContainer.propTypes = {
  isEdit: PropTypes.bool,
};

TaskAddEditContainer.defaultProps = {
  isEdit: false,
};

export default TaskAddEditContainer;
