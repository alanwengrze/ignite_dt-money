import { ButtonFilterWrapper, ButtonWrapperMobile, CategoryAndDateMobile, PriceHighlight, TransactionsContainer, TransactionsMobile, TransactionsTable, TransactionsTableScroll, WrapperMobile } from "./styles";
import { useDeleteTransaction, useTransactions, useTransactionById, useFilteredTransactions, useIsFiltering, useFilterTransactionsToType} from "../../contexts/TransactionsContext";
import { CalendarBlank, TagSimple, X } from "phosphor-react"
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { DialogButton } from "../../components/DialogButton";
import { ButtonUpdateTransaction} from "../../components/ButtonEditTransaction";
import { ButtonFilter } from "../../components/ButtonFilter";

export const Transactions = () => {
  const transactions = useTransactions()
  const filteredTransactions = useFilteredTransactions()
  const filterTransactionsToType = useFilterTransactionsToType()
  const isFiltering = useIsFiltering()
  const deleteTransaction = useDeleteTransaction()
  const transactionById = useTransactionById()
  async function handleDeleteTransaction(id: number) {
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
        <ButtonFilterWrapper>
          <ButtonFilter 
            onFilter={() => filterTransactionsToType("outcome")}
            title="saídas"
            variant="outcome"
          />
          <ButtonFilter 
            onFilter={() => filterTransactionsToType("income")}
            title="entradas"
            variant="income" 
          />
        </ButtonFilterWrapper>
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
                      <td>{dateFormatter.format(transaction.createdAt)}</td>
                      <td>
                        <DialogButton
                        triggerText={<X size={20} weight="bold"/>}
                        data={{
                          title: "Excluir transação",
                          description: "Tem certeza que deseja excluir essa transação?",
                          confirmText: "Excluir"
                        }}
                        onClick={() => handleDeleteTransaction(transaction.id)}
                        />
                        
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
          {
            transactionsToRender.map(transaction => {
              return(
                <TransactionsMobile key={transaction.id}>
                  <ButtonWrapperMobile>
                    <ButtonUpdateTransaction 
                      onUpdateTransaction={() => handleUpdateTransaction(transaction.id)}
                    />
                   <DialogButton
                      triggerText={<X size={20} weight="bold"/>}
                      data={{
                        title: "Excluir transação",
                        description: "Tem certeza que deseja excluir essa transação?",
                        confirmText: "Excluir"
                      }}
                      onClick={() => handleDeleteTransaction(transaction.id)}
                    />
                  </ButtonWrapperMobile>
                  <span className="description">{transaction.description}</span>
                    <PriceHighlight 
                      $variant= {transaction.type}>
                      {transaction.type === "outcome"  && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                    <CategoryAndDateMobile>
                      <WrapperMobile>
                        <TagSimple />
                        <p>{transaction.category}</p>
                      </WrapperMobile>
                      <WrapperMobile>
                        <CalendarBlank />
                        <p>{dateFormatter.format(transaction.createdAt)}</p>
                      </WrapperMobile>
                    </CategoryAndDateMobile>
                </TransactionsMobile>
              )
            })
          }
      </TransactionsContainer>
    </div>
  )
}