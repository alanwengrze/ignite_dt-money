import { SummaryContainer } from "./styles"
import { CardSummary } from "../CardSummary"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react"

export const Summary = () => {
  return (
    <SummaryContainer>
      <CardSummary 
        title="Entradas"
        icon={<ArrowCircleDown size={32} color="#00b37e"/>}
        amount="R$ 12.000,00"
      />
      <CardSummary 
        title="Entradas"
        icon={<ArrowCircleUp size={32} color="#f75a68"/>}
        amount="R$ 12.000,00"
      />
      <CardSummary 
        title="Entradas"
        icon={<CurrencyDollar size={32} color="#fff"/>}
        amount="R$ 12.000,00"
        
      />
    </SummaryContainer>
  )
}