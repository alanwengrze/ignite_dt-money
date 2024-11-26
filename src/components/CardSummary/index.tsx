import { CardSummaryContainer } from "./styles"

interface CardSummaryProps {
  title: string
  icon: React.ReactNode
  amount: string
}

export const CardSummary = ({ title, icon, amount }: CardSummaryProps) => {
  return (
    <CardSummaryContainer>
      <header>
        <p>{title}</p>
        <span>{icon}</span>
      </header>
      <h1>{amount}</h1>
    </CardSummaryContainer>
  )
}