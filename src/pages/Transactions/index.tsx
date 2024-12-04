import { useTransactions } from "../../components/contexts/TransactionsContext";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighlight, TransactionsContainer, TransactionsTable, TransactionsTableScroll } from "./styles";


export const Transactions = () => {
  const {transactions} = useTransactions()
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
                      <td width="50%">{transaction.description}</td>
                      <td>
                        <PriceHighlight $variant={transaction.type}>
                          {transaction.type === "outcome"  && "- "}
                          {priceFormatter.format(transaction.price)}
                        </PriceHighlight>
                      </td>
                      <td>{transaction.category}</td>
                      <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
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