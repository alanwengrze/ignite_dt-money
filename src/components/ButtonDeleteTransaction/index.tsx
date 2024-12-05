import { X } from "phosphor-react"
import { ButtonDeleteTransactionContainer, Trigger, Overlay, Portal, Content, Title, CancelButton, ConfirmButton, ButtonWrapper, Description } from "./styles";

interface ButtonDeleteTransactionProps {
  onDeleteTransaction: () => void
}
export const ButtonDeleteTransaction = ({onDeleteTransaction}: ButtonDeleteTransactionProps) => {
  return(
    <ButtonDeleteTransactionContainer>
      <Trigger asChild>
        <X size={20} weight="bold" />
      </Trigger>
      <Portal>
        <Overlay/>
        <Content>
          <Title>Quer mesmo excluir esta transação?</Title>
          <Description> Se você apagar esta transação, não será possível recupera-la.</Description>
          <ButtonWrapper>
            <CancelButton>Cancelar</CancelButton>
            <ConfirmButton onClick={onDeleteTransaction}>Excluir</ConfirmButton>
          </ButtonWrapper>
        </Content>
      </Portal>
    </ButtonDeleteTransactionContainer>
  )
}