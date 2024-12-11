import { useTransactions, useFilteredTransactions, useIsFiltering } from "../contexts/TransactionsContext";
import { useMemo } from "react";

export function useSummary(){
  const transactions = useTransactions()
  const filteredTransactions = useFilteredTransactions()
  const isFiltering = useIsFiltering()

  const summaryTransactionsToRender = isFiltering ? filteredTransactions : transactions
  // {income: 0, outcome: 0, total: 0}
  
  const summary = useMemo(()=> {
    return summaryTransactionsToRender.reduce(
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
  
  }, [summaryTransactionsToRender])
  return summary
}