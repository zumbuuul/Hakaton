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
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          cupiditate expedita hic culpa commodi nostrum sapiente earum,
          assumenda nihil voluptatem qui rem sed. Reiciendis sit obcaecati sint
          ut architecto error.
        </Description>
      </CardWrapper>
    </div>
  );
};

export default FeatureCard;
