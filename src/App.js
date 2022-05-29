import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repo } from "./pages/Repo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/repo-detail/:id" element={<Repo />}></Route>
    </Routes>
  );
}

export default App;
