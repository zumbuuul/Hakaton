import React from "react";

import {
  CardWrapper,
  Title,
  Description,
  Image,
  ImageWrapper,
} from "../Styles/Home/FeatureCard";

const FeatureCard = ({ title, description, image, redirect }) => {
  return (
    <div>
      <CardWrapper>
        <Title>{title}</Title>
        <ImageWrapper>
          <a href={redirect}>
            <Image src={image}></Image>
          </a>
        </ImageWrapper>
        <Description>{description}</Description>
      </CardWrapper>
    </div>
  );
};

export default FeatureCard;
