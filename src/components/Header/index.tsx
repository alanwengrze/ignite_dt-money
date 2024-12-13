import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
import { useAuth } from "../../contexts/AuthContext";
export const Header = () => {
  const { signOut } = useAuth();
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
        <button onClick={handleLogout}>Sair</button>
      </HeaderContent>
    </HeaderContainer>
  );
};