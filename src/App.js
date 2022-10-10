import React from "react";
import VideoPlayer from "./pages/videoPlayer";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}
