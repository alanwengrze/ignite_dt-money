import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"
import { SummaryContainer, SummaryCard } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react"

export const Summary = () => {

  const { transactions } = useContext(TransactionsContext)

  // {income: 0, outcome: 0, total: 0}

  const summary = transactions.reduce(
    (acc, transaction) => {
      if(transaction.type === "income") {
        acc.income += transaction.price;
        acc.balance += transaction.price;
      }else {
        acc.outcome += transaction.price;
        acc.balance -= transaction.price;
      }

      return acc;
    }, 
      {
        income: 0, 
        outcome: 0, 
        balance: 0
      })


  return (
    <SummaryContainer>
      <SummaryCard $icon="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32}/>
        </header>
        <strong>R$ {summary.income}</strong>
      </SummaryCard>

      <SummaryCard $icon="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32}/>
        </header>
        <strong>R$ {summary.outcome}</strong>
      </SummaryCard>

      <SummaryCard className="" $icon="white" $balance={`${summary.balance <= 0 ? 'redDark' : 'greenDark'}`}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32}/>
        </header>
        <strong>R$ {summary.balance}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}