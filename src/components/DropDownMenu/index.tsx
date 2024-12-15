import { DropdownMenuContainer, Trigger, TriggerItems, Portal, Content} from "./styles";
import {CaretDown} from "phosphor-react"

interface DropDownMenuProps {
  children: React.ReactNode
  triggerText: string
}

export const DropDownMenu = ({children, triggerText}: DropDownMenuProps) => {
  return (
    <DropdownMenuContainer modal={false}>
      <Trigger asChild>
        <TriggerItems>
          <span>Seja bem vindo(a),<h3>{triggerText}</h3></span> 
          <CaretDown size={20} weight="bold" />
        </TriggerItems>
      </Trigger>
      <Portal>
        <Content>
          {children}   
        </Content>
      </Portal>
    </DropdownMenuContainer>
  )
};