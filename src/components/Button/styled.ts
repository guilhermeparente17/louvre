import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: fit-content;
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: 0;
  border-radius: 6px;
  font-size: 13px;
  transition: 0.2s ease-in-out;
  
  &:hover {
    opacity: 0.7;
    transition: 0.2s ease-in-out;
  }
`