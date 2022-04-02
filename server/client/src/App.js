import React from "react";
import Home from "./Views/Home.jsx";
import TextToSpeech from "./Views/TextToSpeech.jsx";
import SpeechToText from "./Views/SpeechToText.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/text-to-speech" element={<TextToSpeech />} />
        <Route exact path="/speech-to-text" element={<SpeechToText />} />
      </Routes>
    </Router>
  );
};

export default App;
