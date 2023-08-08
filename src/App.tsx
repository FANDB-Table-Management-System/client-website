/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
