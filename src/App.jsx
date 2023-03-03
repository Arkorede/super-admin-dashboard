import React, { useState } from "react";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
