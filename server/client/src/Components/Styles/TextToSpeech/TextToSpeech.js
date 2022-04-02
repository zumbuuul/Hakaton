import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;
  column-gap: 150px;
`;

export const QuickDialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2vh;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextInput = styled.textarea`
  margin-right: 500px;
  width: 95%;
  height: 100px;
  border-radius: 10px;
  border: 5px solid black;
  font-size: 2.5rem;
  resize: none;
`;

export const PlayButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  align-self: center;
  background-color: white;
  margin-top: 1vh;
`;
