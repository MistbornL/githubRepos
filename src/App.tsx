import "./App.scss";
import { Route, Routes } from "react-router-dom";
import * as React from "react";

import { Repo } from "./pages/repo/Repo";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/repo-detail/:id" element={<Repo />}></Route>
    </Routes>
  );
}

export default App;
