import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Register';
import ModalRegister from '../ModalRegister';

function RegisterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />}>
        <Route path="modal" element={<ModalRegister />} />
      </Route>
    </Routes>
  );
}

export default RegisterRoutes;
