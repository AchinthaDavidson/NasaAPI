import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "../src/components/authGuard.jsx";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import { Gallery } from "./pages/Gallery/Gallery.jsx";
import MarsRoverPhotos from "./pages/Mars-Rover-Photo/Mars-Rover-Photo.jsx";

function ProtectedRoutes() {
  return (
    <AuthGuard>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="mars" element={<MarsRoverPhotos />} />
      </Routes>
    </AuthGuard>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app/*" element={<ProtectedRoutes />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
