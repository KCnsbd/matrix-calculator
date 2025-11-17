import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Lessons from "./pages/Lessons";
import "./App.css";

function App() {
  return (
    <div>
    <Header />
    <main className="main-content">
      <Routes> 
        <Route path="/matrix-calculator/" element={<Home />} />
        <Route path="/matrix-calculator/about-us" element={<AboutUs />} />
        <Route path="/matrix-calculator/lessons" element={<Lessons />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
