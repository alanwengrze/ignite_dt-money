import { HeaderContainer, HeaderContent } from "./styles";
import { Button } from "../Button";
import logo from '../../assets/logo.svg'
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Button 
          title="Nova transação"
        />
      </HeaderContent>
    </HeaderContainer>
  );
};