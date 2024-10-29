import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import React from 'react';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
