import { DropdownMenuContainer, Trigger, Portal, Content, Wrapper} from "./styles";
import {CaretDown} from "phosphor-react"

interface DropDownMenuProps {
  children: React.ReactNode
  triggerText: string
}

export const DropDownMenu = ({children, triggerText}: DropDownMenuProps) => {
  return (
    <DropdownMenuContainer modal={false}>
      <Wrapper>
      <span>Seja bem vindo(a),<h3>{triggerText}</h3></span> 
        <Trigger asChild>
          <CaretDown size={20} weight="bold" />
        </Trigger>
      </Wrapper>
      <Portal>
        <Content>
          {children}   
        </Content>
      </Portal>
    </DropdownMenuContainer>
  )
};