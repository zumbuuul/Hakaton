import React from "react";
import Home from "./Views/Home.jsx";
import TextToSpeech from "./Views/TextToSpeech.jsx";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/text-to-speech" element={<TextToSpeech />} />
      </Routes>
    </Router>
  );
};

export default App;
