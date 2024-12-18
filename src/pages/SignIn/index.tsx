import { SignInContainer, ButtonSubmit, FormField, Label, Input, FormContainer, GoToSignUp, LinkTo, ImageLogo  } from "./styles"
import * as Form from "@radix-ui/react-form"
import * as zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../contexts/AuthContext"
import logo from "../../assets/logo.svg"

const signInFormSchema = zod.object({
  email: zod.string(),
  password: zod.string().min(2),
})

type signInFormInputs = zod.infer<typeof signInFormSchema>

export const SignIn = () => {
  const { signIn } = useAuth()

  const {
      register,
      handleSubmit,
      reset
    } = useForm<signInFormInputs>({
    resolver: zodResolver(signInFormSchema)
  })

  async function handleSignIn (data: signInFormInputs){
    const { email, password } = data;
    await signIn(email, password);
    reset();
  }
  return(
    <SignInContainer>
      <FormContainer onSubmit={handleSubmit(handleSignIn)}>
        <ImageLogo src={logo} alt="" />
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
        </FormField>
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
        <GoToSignUp>
          <p>Ainda não possui uma conta?</p>
          <LinkTo to="/register">Cadastrar</LinkTo>
        </GoToSignUp>
      </FormContainer>
      
    </SignInContainer>
  )
}