import { SummaryContainer, SummaryCard } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react"
import { priceFormatter } from "../../utils/formatter"
import { useSummary } from "../../hooks/useSummary"

export const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard $icon="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32}/>
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard $icon="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32}/>
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard className="" $icon="white" $balance={`${summary.balance <= 0 ? 'redDark' : 'greenDark'}`}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32}/>
        </header>
        <strong>{priceFormatter.format(summary.balance)}</strong>
      </SummaryCard>

    </SummaryContainer>
  )
}