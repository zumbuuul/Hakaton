import React from "react";
import { GlobalStyle } from "../Components/Styles/Generic/Body.js";
import { ContentWrapper } from "../Components/Styles/Home/Home.js";

import FeatureCard from "../Components/Home/FeatureCard.jsx";
import Header from "../Components/Home/Header.jsx";

const Home = () => {
  return (
    <div>
      <a href="">
        <img
          style={{
            position: "absolute",
            width: "7%",
            top: "30px",
            left: "30px",
          }}
          src="small.png"
        ></img>
      </a>
      <ContentWrapper>
        <GlobalStyle />
        <Header />
        <FeatureCard
          title="Текст у говор"
          image="tts.png"
          redirect={"/text-to-speech"}
        />
        <FeatureCard
          title="Говор у текст"
          image="stt.png"
          redirect={"/speech-to-text"}
        />
        <FeatureCard
          title="Знаковни језик"
          image="sign.png"
          redirect={"/sign-language"}
        />
      </ContentWrapper>
    </div>
  );
};

export default Home;
