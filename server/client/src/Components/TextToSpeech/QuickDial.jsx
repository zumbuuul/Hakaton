import React from "react";
import { RoundButton, QuickDialImage } from "../Styles/TextToSpeech/QuickDial";

const QuickDial = ({ itemName }) => {
  function playAudio() {
    const audio = new Audio();
    audio.src = `./sounds/${itemName}.mp3`;
    audio.play();
  }

  return (
    <RoundButton
      onClick={() => {
        playAudio();
      }}
    >
      <QuickDialImage src={`./images/${itemName}.png`} />
    </RoundButton>
  );
};

export default QuickDial;
