import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignIn from '../containers/SignIn'

export default () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
  </Routes>
);