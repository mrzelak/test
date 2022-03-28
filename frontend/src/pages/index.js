import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Routing = () => (
  <Routes>
    <Route path="public">
      <Route path="login" element="TODO: Login" />
      <Route path="register" element="TODO: Register" />
    </Route>
    <Route path="application">
      <Route path="dashboard" element="TODO: Dashboard" />
      <Route path="settings" element="TODO: Settings" />
    </Route>

    <Route path="*" element={<Navigate to="/public/login" replace />} />
  </Routes>
);

export default Routing;
