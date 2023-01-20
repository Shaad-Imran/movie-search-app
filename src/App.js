import React from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Error from "./components/Error";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
