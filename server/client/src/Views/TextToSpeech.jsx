import React, { useState, useEffect } from "react";
import { GlobalStyle } from "../Components/Styles/Generic/Body.js";
import {
  ContentWrapper,
  QuickDialWrapper,
  InputWrapper,
  TextInput,
  PlayButton,
} from "../Components/Styles/TextToSpeech/TextToSpeech.js";

import QuickDial from "../Components/TextToSpeech/QuickDial.jsx";
import sound from "./output.mp3";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(false);

  function forceRender() {
    if (state) setState(false);
    if (!state) setState(true);
  }

  function test() {
    const zvuk = new Audio();
    zvuk.src = sound;
    zvuk.play();
  }

  async function sendData() {
    fetch("http://localhost:3030/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: text }),
    });
    forceRender();
    test();
  }

  return (
    <div>
      <GlobalStyle />
      <a href="/">
        <img style={{ width: "9%", padding: "25px" }} src="small.png"></img>
      </a>
      <ContentWrapper>
        <QuickDialWrapper>
          <QuickDial itemName="hello"></QuickDial>
          <QuickDial itemName="clap"></QuickDial>
          <QuickDial itemName="thanks"></QuickDial>
          <QuickDial itemName="bye"></QuickDial>
          <QuickDial itemName="morning"></QuickDial>
          <QuickDial itemName="evening"></QuickDial>
        </QuickDialWrapper>
        <InputWrapper>
          <TextInput onChange={(e) => setText(e.target.value)}></TextInput>
          <PlayButton onClick={sendData}></PlayButton>
        </InputWrapper>
        <QuickDialWrapper>
          <QuickDial itemName="ambulance"></QuickDial>
          <QuickDial itemName="police"></QuickDial>
          <QuickDial itemName="firefighter"></QuickDial>
          <QuickDial itemName="alert"></QuickDial>
          <QuickDial itemName="like"></QuickDial>
          <QuickDial itemName="dislike"></QuickDial>
        </QuickDialWrapper>
      </ContentWrapper>
    </div>
  );
};

export default TextToSpeech;
