import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>

    </div>
  );
}

export default App;
