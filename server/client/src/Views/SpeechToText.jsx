import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { GlobalStyle } from "../Components/Styles/Generic/Body";
import {
  Transcript,
  TextWrapper,
  Buttons,
  MainWrapper,
  Button,
} from "../Components/Styles/SpeechToText/SpeechToText";

function SpeechToText() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  const startListening = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      language: "sr-SP",
      continuous: true,
    });
  };
  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    resetTranscript("");
  };

  return (
    <div>
      <a href="/">
        <img style={{ width: "7%", margin: "50px" }} src="small.png"></img>
      </a>
      <p
        style={{
          fontSize: "5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "-200px",
        }}
      >
        Говор у текст
      </p>
      <MainWrapper>
        <GlobalStyle />

        <TextWrapper>
          <Transcript value={transcript}>{transcript}</Transcript>
        </TextWrapper>
        <Buttons>
          <Button ref={microphoneRef} onClick={startListening}>
            Start
          </Button>
          <Button onClick={stopListening}>Stop</Button>
        </Buttons>
      </MainWrapper>
      <img
        style={{
          width: "20%",
          display: "block",
          margin: "auto",
          marginTop: "50px",
        }}
        src="logo.png"
      ></img>
    </div>
  );
}
export default SpeechToText;
