import { useState } from "react";
import "./App.css";
import Home from "../Home/Home";
import SideBar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../Contact/Contact";

function App() {
  return (
    <div className="page">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
