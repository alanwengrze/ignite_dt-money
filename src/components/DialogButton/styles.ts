import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const DialogButtonContainer = styled(AlertDialog.Root)`
  
`
export const Trigger = styled(AlertDialog.Trigger)`

  cursor: pointer;
  color: ${(props) => props.theme["red-300"]};
`

export const TriggerItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`


export const Portal = styled(AlertDialog.Portal)`

`

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
export const Content = styled(AlertDialog.Content)`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme["gray-800"]};
  position: fixed;
  /* Um hack para centralizar o modal */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 568px) {
    width: calc(100% - 3rem);
  }

`
export const Title = styled(AlertDialog.Title)`
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
export const Description = styled(AlertDialog.Description)`
  color: ${(props) => props.theme["gray-300"]};
  font-size: 1rem;
  margin-bottom: 2rem;
`
export const ButtonWrapper = styled.div`
  display: flex;

  gap: 1rem;

  @media (max-width: 568px) {
    flex-direction: column;
  }
`

export const CancelButton = styled(AlertDialog.Cancel)`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  

  &:hover {
    background-color: ${(props) => props.theme["red-700"]};
  }

  &:not(:focus) {
    border: 1px solid ${(props) => props.theme["red-500"]};
  }
`
export const ConfirmButton = styled(AlertDialog.Action)`
  background-color: ${(props) => props.theme["red-500"]};
  border: 0;
  color: ${(props) => props.theme["white"]};
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["red-700"]};
    box-shadow: 0 0 0 1px ${(props) => props.theme["red-500"]};
  }
`