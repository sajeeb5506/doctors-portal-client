import React from 'react';
import { Route, Routes } from "react-router-dom";

import Appointment from "./Appointment/Appointment";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Navber from "./Pages/Shared/Navber";

function App() {
  return (
    <div>
    <Navber></Navber>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
