import {  useTransactions } from "../components/contexts/TransactionsContext";

export function useSummary(){
  const {transactions} = useTransactions()

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

  return summary
}