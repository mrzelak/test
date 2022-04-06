import React from 'react';
import PropTypes from 'prop-types';
import { initialValues } from './consts';
import TaskAddEditView from './view';

const TaskAddEditContainer = ({ isEdit }) => {
  // TODO wykorzystać isEdit np do zmiany wysyłanego requesta w onSubmit
  const onSubmit = (values) => {
    console.log({ isEdit });
    console.log(values);
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
