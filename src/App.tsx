import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Shaparoo, ShaparooShow } from "./components/shaparoo";
import { ShaparooForm } from "./components/shaparoo-form";
import { ShaparooGallery } from "./components/shaparoo-gallery";

function App() {
  return (
    <div className="container-flex">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShaparooGallery />} />
          <Route path="/shaparoos" element={<Shaparoo />}>
            <Route index element={<ShaparooGallery />} />
            <Route path="new" element={<ShaparooForm />} />
            <Route path=":id/edit" element={<ShaparooForm />} />
            <Route path=":id" element={<ShaparooShow />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
