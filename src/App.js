import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Repo } from "./pages/repo/Repo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/repo-detail/:id" element={<Repo />}></Route>
    </Routes>
  );
}

export default App;
