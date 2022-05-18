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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';

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
        <Route path="/dashboard" element={
        <RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>
        
       } >
         <Route index element={<MyAppointment/>}></Route>
         <Route path='/dashboard/review' element={<MyReview/>}></Route>
       </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
