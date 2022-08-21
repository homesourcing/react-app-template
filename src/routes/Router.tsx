import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Dashboard} from '../pages/Dashboard/Dashboard';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
