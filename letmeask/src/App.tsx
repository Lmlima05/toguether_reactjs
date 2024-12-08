import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function App() {
  return (
    <Router>
      <Routes>
        {/* Definição das rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/new-room" element={<NewRoom />} />
      </Routes>
    </Router>
  );
}