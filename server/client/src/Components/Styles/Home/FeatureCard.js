import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 5vh;
  border: 12px solid #3a3845;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Description = styled.p`
  width: 60%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  border: 5px solid #3a3845;
  border-radius: 10px;
  width: 70%;
  height: 25vh;
  &:hover {
    transition: 0.1s;
    box-shadow: 2px 2px 10px black;
  }
`;
