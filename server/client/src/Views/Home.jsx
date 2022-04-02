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
            top: "50px",
            left: "50px",
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
          description={
            "У случају када водите конверзацију са особом која не разуме знаковни језик, ова опција Вам омогућава да Ваше мисли изразите кроз речи које ће Ваш уређај изговорати уместо Вас."
          }
        />
        <FeatureCard
          title="Говор у текст"
          image="stt.png"
          redirect={"/speech-to-text"}
          description="Када комуницирате са неком особом која се не сналази у знаковном језику, ово Вам омогућава лакшу конверзацију у облику исписивања њихових речи директно на ваш екран."
        />
      </ContentWrapper>
    </div>
  );
};

export default Home;
