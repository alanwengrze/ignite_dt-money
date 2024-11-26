import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer } from "./styles";
export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Header />
      <Summary />
    </TransactionsContainer>
  )
}