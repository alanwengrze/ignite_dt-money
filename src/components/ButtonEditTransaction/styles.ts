import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";


export const ButtonEditTransactionContainer = styled(Dialog.Root)`

`;
export const Portal = styled(Dialog.Portal)`

`

export const Trigger = styled(Dialog.Trigger)`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme["white"]};
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;
  /* Um hack para centralizar o modal */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: background-color 0.2s;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme["green-700"]};
      }
    }
  }

  @media (max-width: 568px) {
    width: calc(100% - 3rem);
  }

`

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
export const Description = styled(Dialog.Description)`
  color: ${(props) => props.theme["gray-300"]};
  font-size: 1rem;
  margin-bottom: 2rem;
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0; // para tirar o espaco entre o x e o texto
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;
