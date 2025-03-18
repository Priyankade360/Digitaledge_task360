// import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./Component/LoginForm/LoginForm";
import Navbar from "./Component/Navbar/Navbar";
import Task from "./Component/Task/Task";
import Project from "./Component/Project/Project";
import ChatBoard from "./Component/ChatBoard/ChatBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Task />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/ChatBoard" element={<ChatBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
