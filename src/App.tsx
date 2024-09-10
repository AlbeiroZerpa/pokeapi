import { Route, Routes } from "react-router-dom";
import { PokePage } from "./Screens/PokePage"
import { Home } from "./Screens/Home";
import "./css/styles.css";

export function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="PokePage" element={<PokePage />} />
      </Routes>
    </div>
  );
}
