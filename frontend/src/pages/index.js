import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskAddEdit from 'pages/authorized/Task/AddEdit';

const Routing = () => (
  <Routes>
    <Route path="public">
      <Route path="login" element="TODO: Login" />
      <Route path="register" element="TODO: Register" />
    </Route>
    <Route path="application">
      <Route path="dashboard" element="TODO: Dashboard" />
      <Route path="settings" element="TODO: Settings" />
      <Route path="task">
        <Route path="add" element={<TaskAddEdit />} />
      </Route>
    </Route>

    <Route path="*" element={<Navigate to="/public/login" replace />} />
  </Routes>
);

export default Routing;
