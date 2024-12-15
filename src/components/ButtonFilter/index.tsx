import {ButtonFilterContainer} from './styles'
import { ArrowCircleDown, ArrowCircleUp} from "phosphor-react"
interface ButtonFilterProps {
  onFilter: () => void
  title: string
  variant: 'income' | 'outcome'

}
export const ButtonFilter = ({onFilter, title, variant}: ButtonFilterProps) => {

  return(
    <ButtonFilterContainer onClick={onFilter} $variant={variant}>
      {
        variant === 'income' ?
        <ArrowCircleUp size={24} weight="bold" /> :
        <ArrowCircleDown size={24} weight="bold" />
      }
      {title}
    </ButtonFilterContainer>
  )
}