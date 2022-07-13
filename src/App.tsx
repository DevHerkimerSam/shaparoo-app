import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Welcome } from "./components/welcome";
import { Shaparoo } from "./components/shaparoo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shaparoos" element={<Shaparoo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
