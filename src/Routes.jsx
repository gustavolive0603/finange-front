import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Switch>
  );
}

export default Routes;
