import { DialogButtonContainer, Trigger, Overlay, Portal, Content, Title, CancelButton, ConfirmButton, ButtonWrapper, Description, TriggerItems } from "./styles";
interface DialogButtonProps {
  onClick: () => void
  triggerText: string | React.ReactNode
  data: {
    title: string,
    description: string,
    confirmText: string
  }
}
export const DialogButton = ({onClick, data, triggerText}: DialogButtonProps) => {
  return(
    <DialogButtonContainer>
      <Trigger asChild>
        <TriggerItems>{triggerText}</TriggerItems>
      </Trigger>
      <Portal>
        <Overlay/>
        <Content>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
          <ButtonWrapper>
            <CancelButton>Cancelar</CancelButton>
            <ConfirmButton onClick={onClick}>{data.confirmText}</ConfirmButton>
          </ButtonWrapper>
        </Content>
      </Portal>
    </DialogButtonContainer>
  )
}