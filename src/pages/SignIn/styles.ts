import styled from "styled-components";
import * as Form from "@radix-ui/react-form";

export const SignInContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled(Form.Root)`
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
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
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme["gray-900"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

