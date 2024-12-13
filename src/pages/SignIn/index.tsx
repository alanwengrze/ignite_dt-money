import { SignInContainer, ButtonSubmit, FormField, Label, Input, FormContainer  } from "./styles"
import * as Form from "@radix-ui/react-form"
import * as zod from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../contexts/AuthContext"

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
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
      </FormContainer>
      <button>Não tem uma conta?</button>
    </SignInContainer>
  )
}