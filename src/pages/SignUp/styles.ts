import styled from "styled-components";
import * as Form from "@radix-ui/react-form";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

 
`;

export const Image = styled.img`
  max-width: 20rem;
  
`;

export const ImageLogo = styled.img`
  margin-bottom: 2rem;
  max-width: 15rem;
`;

export const FormContainer = styled(Form.Root)`
  width: 35rem;
  padding: 3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme["gray-700"]};
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonSubmit = styled(Form.Submit)`
  width: 100%;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`

export const FormField = styled(Form.Field)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled(Form.Label)`
  font-size: 0.875rem;
  color: ${(props) => props.theme["gray-100"]};
`;


export const Input = styled.input`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const Error = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["red-500"]};
`;

export const GoToSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme["gray-300"]};
`;

export const LinkTo = styled(Link)`
  text-align: center;
  color: ${(props) => props.theme["green-500"]};
  text-decoration: none;
  cursor: pointer;
`

