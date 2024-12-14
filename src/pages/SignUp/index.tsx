
import { SignInContainer, ButtonSubmit, FormField, Label, Input, FormContainer, GoToSignUp, LinkTo, ImageLogo  } from "./styles"
import * as Form from "@radix-ui/react-form"
import * as zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../contexts/AuthContext"
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
const signInFormSchema = zod.object({
  name: zod.string().min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
  email: zod.string(),
  password: zod.string().min(2),
})

type signInFormInputs = zod.infer<typeof signInFormSchema>

export const SignUp = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const {
      register,
      handleSubmit,
      reset
    } = useForm<signInFormInputs>({
    resolver: zodResolver(signInFormSchema)
  })

  async function handleSignUp (data: signInFormInputs){
    const { name, email, password } = data;
    await signUp(name, email, password);
    navigate('/');
    reset();
  }
  return(
    <SignInContainer>
      <FormContainer onSubmit={handleSubmit(handleSignUp)}>
      <ImageLogo src={logo} alt="" />
        <FormField name="name">
          <Label htmlFor="name">
            Nome
          </Label>
        <Form.Control asChild>
          <Input
            type="text"
            placeholder="Nome"
            required
            {...register("name")}
          />
        </Form.Control>
        </FormField>
        <FormField name="email">
          <Label htmlFor="email">
            E-mail
          </Label>
        <Form.Control asChild>
          <Input
            type="email"
            placeholder="E-mail"
            required
            {...register("email")}
          />
        </Form.Control>
          {/* <Message /> */}
        </FormField>
        <FormField name="password">
         <Label htmlFor="password">
           Senha
         </Label>
        <Form.Control asChild>
          <Input
            type="password"
            placeholder="Senha"
            required
            {...register("password")}
          />
        </Form.Control>
          {/* <Message /> */}
        </FormField>
        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
        <GoToSignUp>
          <p>Já tem uma conta?</p>
          <LinkTo to="/signIn">Fazer login</LinkTo>
        </GoToSignUp>
      </FormContainer>
      
    </SignInContainer>
  )
}