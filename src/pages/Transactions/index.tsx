import { useDeleteTransaction, useTransactions, useUpdateTransaction, type Transaction } from "../../contexts/TransactionsContext";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsTable, TransactionsTableScroll } from "./styles";
import { ButtonDeleteTransaction } from "../../components/ButtonDeleteTransaction";
import { ButtonUpdateTransaction} from "../../components/ButtonEditTransaction";

export const Transactions = () => {
  const transactions = useTransactions()
  const deleteTransaction = useDeleteTransaction()
  const updateTransaction = useUpdateTransaction()
  function handleDeleteTransaction(id: string) {
    deleteTransaction(id)
  }
  function handleUpdateTransaction(transaction: Transaction) {
    updateTransaction(transaction)
  }
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
                transactions.map(transaction => {
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
                      <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                      <td>
                        <ButtonDeleteTransaction
                        onDeleteTransaction={() => handleDeleteTransaction(transaction.id)}/>
                        
                      </td>
                      <td>
                        <ButtonUpdateTransaction 
                          
                          onUpdateTransaction={() => handleUpdateTransaction(transaction)}
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