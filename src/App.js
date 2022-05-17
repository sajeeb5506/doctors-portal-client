import React from 'react';
import { Route, Routes } from "react-router-dom";

import Appointment from "./Appointment/Appointment";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navber from "./Pages/Shared/Navber";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <Navber></Navber>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointment" element={
        <RequireAuth>
        <Appointment />
        </RequireAuth>
        
       } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
