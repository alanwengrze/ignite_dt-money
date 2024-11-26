import { SummaryContainer, SummaryCard } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react"

const account = {
  balance: -10,
  income: 12000,
  outcome: 12000
}

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard icon="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32}/>
        </header>
        <strong>R$ {account.income}</strong>
      </SummaryCard>

      <SummaryCard icon="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32}/>
        </header>
        <strong>R$ {account.outcome}</strong>
      </SummaryCard>

      <SummaryCard className="" icon="white" balance={`${account.balance <= 0 ? 'redDark' : 'greenDark'}`}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32}/>
        </header>
        <strong>R$ {account.balance}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}