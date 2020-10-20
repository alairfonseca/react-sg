import React from 'react';
import { Routes } from 'react-router-dom';
import Home from '../containers/Home';
import PrivateRoute from '../utils/PrivateRoute';

export default () => (
  <Routes>
    <PrivateRoute path="/" component={<Home />} />
  </Routes>
);