import styled from "styled-components";

export const Transcript = styled.textarea`
  background-color: white;
  border: 5px solid black;
  resize: none;
  width: 900px;
  height: 300px;
  font-size: 2rem;
  padding: 20px;
`;

export const Buttons = styled.div``;

export const TextWrapper = styled.div``;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 10vh;
`;

export const Button = styled.button`
  margin: 10px 20px;

  width: 200px;
  height: 50px;
  font-size: 1.25rem;
  background-color: black;
  border: 3px solid white;
  color: white;
`;
