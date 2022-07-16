import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Welcome } from "./components/welcome";
import {
  Shaparoo,
  ShaparooGallery,
  ShaparooNew,
  ShaparooShow,
  ShaparooEdit,
} from "./components/shaparoo";

import { ShaparooForm } from "./components/shaparoo-form";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shaparoos" element={<Shaparoo />}>
            <Route index element={<ShaparooGallery />} />
            <Route path="new" element={<ShaparooNew />} />
            <Route path=":id/edit" element={<ShaparooEdit />} />
            <Route path=":id" element={<ShaparooShow />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
