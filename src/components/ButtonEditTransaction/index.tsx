import { Controller, useForm } from "react-hook-form"
import { ButtonEditTransactionContainer, Trigger, Overlay, Portal, Content, Title, CloseButton } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, Pencil, X } from "phosphor-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { TransactionType, TransactionTypeButton } from "../NewTransactionModal/styles"
import * as zod from "zod"
import {useTransaction, useUpdateTransaction } from "../../contexts/TransactionsContext"

export const editTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

export type editTransactionFormInputs = zod.infer<typeof editTransactionFormSchema>

interface ButtonUpdateTransactionProps {
  onUpdateTransaction: () => void
}

export const ButtonUpdateTransaction = ({ onUpdateTransaction}:ButtonUpdateTransactionProps) => {
  
  const updateTransaction = useUpdateTransaction()
  const transaction = useTransaction()
  const {
    control,
    register, 
    handleSubmit,
    formState: {
      isSubmitting
    },
    } = useForm<editTransactionFormInputs>({
    resolver: zodResolver(editTransactionFormSchema),
    defaultValues: {
      type: transaction.type,
      description: transaction.description,
      category: transaction.category,
      price: transaction.price
    }
  })

  function handleUpdateTransaction(data: editTransactionFormInputs) {
    const {description, price, category, type} = data
    updateTransaction({
      id: transaction.id,
      description: description,
      price: price,
      category: category,
      type: type,
      createdAt: transaction.createdAt
    })
  }

  return (
    <ButtonEditTransactionContainer>
      <Trigger asChild onClick={onUpdateTransaction}><Pencil /></Trigger>
      <Portal>
        <Overlay />

        <Content>
          <CloseButton><X /></CloseButton>
          <Title>Editar transação</Title>
          <form onSubmit={handleSubmit(handleUpdateTransaction)}>
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
          
          <button type="submit" disabled={isSubmitting}>Salvar alterações</button>
        </form>
        </Content>
      </Portal>
    </ButtonEditTransactionContainer>
  )
}