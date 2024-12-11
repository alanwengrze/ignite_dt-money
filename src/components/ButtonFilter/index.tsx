import {ButtonFilterContainer} from './styles'

interface ButtonFilterProps {
  onFilter: () => void
  title: string
  variant: 'income' | 'outcome'
}
export const ButtonFilter = ({onFilter, title, variant}: ButtonFilterProps) => {

  return(
    <ButtonFilterContainer onClick={onFilter} $variant={variant}>
      {title}
    </ButtonFilterContainer>
  )
}