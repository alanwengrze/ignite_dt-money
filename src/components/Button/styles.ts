import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  padding: 12px 24px;
  border: 0;  
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    
  }
`;