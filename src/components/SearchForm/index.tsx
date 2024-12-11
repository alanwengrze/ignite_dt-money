import { useForm } from "react-hook-form"
import { SearchFormContainer } from "./styles"
import { MagnifyingGlass } from "phosphor-react"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFilterTransactions } from "../../contexts/TransactionsContext"

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>
export const SearchForm = () => {
  const filterTransactions = useFilterTransactions()
  const { 
      register, 
      handleSubmit,
      reset,
      formState: {
        isSubmitting
      }
    } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await filterTransactions(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}><MagnifyingGlass size={20}/> <p>Buscar</p></button>
    </SearchFormContainer>
  )
}