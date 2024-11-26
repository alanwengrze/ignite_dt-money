import { ButtonContainer } from "./styles"
interface ButtonProps {
  title: string
}
export const Button = ({ title }: ButtonProps) => {
  return (
    <ButtonContainer type="button">
      {title}
    </ButtonContainer>
  )
}