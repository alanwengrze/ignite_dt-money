import { FormFieldContainer} from "./styles"

interface FormFieldProps {
  children: React.ReactNode
  name: string
}
export const FormField = ({children, name}: FormFieldProps) => {
  return (
    <FormFieldContainer
      name={name}
    >
      {children}
    </FormFieldContainer>
  )
}