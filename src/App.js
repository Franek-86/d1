import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import "./dist/css/main.css";
import reportWebVitals from "./reportWebVitals";
import DashBoard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import DoorPage from "./pages/DoorPage";
import Login from "./pages/Login";
import TopBar from "./components/Topbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='door' element={<DoorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
