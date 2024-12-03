import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import { X, ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import * as zod from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "../contexts/TransactionsContext";

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'])
})

type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {

  const {createTransaction} = useTransactions()

  const {
      control,
      register, 
      handleSubmit,
      formState: {
        isSubmitting
      },
      reset
    } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    const {description, price, category, type} = data
    createTransaction({description, price, category, type})
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <Dialog.Title>
          Nova transação
        </Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder="Descrição" 
            required
            {...register("description")}
          />
          <input 
            type="number" 
            placeholder="Preço" 
            required
            {...register("price", {valueAsNumber: true})}
          />
          <input 
            type="text" 
            placeholder="Categoria" 
            required
            {...register("category")}
          />
          <Controller 
            control={control}
            name="type"
            render={({field}) => {
              return(
                <TransactionType 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <TransactionTypeButton 
                    $variant="income" 
                    value="income"
                  >
                  <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton $variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          
          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}