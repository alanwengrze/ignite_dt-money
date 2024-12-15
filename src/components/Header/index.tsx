import { DropdownMenuItem, HeaderContainer, HeaderContent, NewTransactionButton, Wrapper } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
import { useAuth } from "../../contexts/AuthContext";
import { DialogButton } from "../DialogButton";
import { DropDownMenu } from "../DropDownMenu";
import {SignOut, User} from "phosphor-react"
export const Header = () => {
  const { signOut, data } = useAuth();
  const { user } = data;
  function handleLogout() {
    signOut()
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <Wrapper>
          <img src={logo} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal/>
          </Dialog.Root>
        </Wrapper>
        <DropDownMenu
          triggerText={user.name}
        >
          <DropdownMenuItem>
            <User />
            <span>Editar perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOut />
            <DialogButton
              onClick={handleLogout}
              data={{
                title: 'Deseja realmente sair?',
                description: 'Você será deslogado do sistema',
                confirmText: 'Sair'
              }}
              triggerText="Sair"
            />
          </DropdownMenuItem>
          
          
        </DropDownMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};