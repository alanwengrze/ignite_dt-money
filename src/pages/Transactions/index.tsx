import { useDeleteTransaction, useTransactions, useTransactionById, useFilteredTransactions, useIsFiltering} from "../../contexts/TransactionsContext";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsTable, TransactionsTableScroll } from "./styles";
import { ButtonDeleteTransaction } from "../../components/ButtonDeleteTransaction";
import { ButtonUpdateTransaction} from "../../components/ButtonEditTransaction";

export const Transactions = () => {
  const transactions = useTransactions()
  const filteredTransactions = useFilteredTransactions()
  const isFiltering = useIsFiltering()
  const deleteTransaction = useDeleteTransaction()
  const transactionById = useTransactionById()
  async function handleDeleteTransaction(id: number) {
    console.log(id)
    await deleteTransaction(id)
  }
  async function handleUpdateTransaction(transactionId: number) {
    await transactionById(transactionId)
  }
  const transactionsToRender = isFiltering ? filteredTransactions : transactions
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTableScroll>
          <TransactionsTable>
            <tbody>
              {
                transactionsToRender.map(transaction => {
                  return (
                    <tr key={transaction.id}>
                      <td width="40%">{transaction.description}</td>
                      <td>
                        <PriceHighlight $variant={transaction.type}>
                          {transaction.type === "outcome"  && "- "}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>{transaction.createdAt}</td>
                      <td>
                        <ButtonDeleteTransaction
                        onDeleteTransaction={() => handleDeleteTransaction(transaction.id)}/>
                        
                      </td>
                      <td>
                        <ButtonUpdateTransaction 
                          onUpdateTransaction={() => handleUpdateTransaction(transaction.id)}
                          />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </TransactionsTable>
        </TransactionsTableScroll>
      </TransactionsContainer>
    </div>
  )
}