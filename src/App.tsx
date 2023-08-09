/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
