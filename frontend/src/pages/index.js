import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthorizedLayout from 'layouts/AuthorizedLayout';
import TaskAddEdit from 'pages/authorized/Task/AddEdit';
import TaskList from 'pages/authorized/Task/List';

const DEFAULT_ROUTE = '/application/tasks/list';

const Routing = () => (
  <Routes>
    <Route path="public">
      <Route path="login" element="TODO: Login" />
      <Route path="register" element="TODO: Register" />
    </Route>
    <Route path="application">
      <Route path="dashboard" element="TODO: Dashboard" />
      <Route path="settings" element="TODO: Settings" />
      <Route path="tasks" element={<AuthorizedLayout />}>
        <Route path="add" element={<TaskAddEdit />} />
        <Route path="list" element={<TaskList />} />
      </Route>
    </Route>

    <Route path="*" element={<Navigate to={DEFAULT_ROUTE} replace />} />
  </Routes>
);

export default Routing;
