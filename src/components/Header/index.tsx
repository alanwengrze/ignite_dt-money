import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
import { useAuth } from "../../contexts/AuthContext";
import { DialogButton } from "../DialogButton";
export const Header = () => {
  const { signOut, data } = useAuth();
  const { user } = data;
  function handleLogout() {
    signOut()
  }
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal/>
        </Dialog.Root>
        <span>Seja bem vindo, {user.name}</span>
        <DialogButton
          onClick={handleLogout}
          data={{
            title: 'Deseja realmente sair?',
            description: 'Você sera deslogado do sistema',
            confirmText: 'Sair'
          }}
          triggerText="Sair"
        />
      </HeaderContent>
    </HeaderContainer>
  );
};