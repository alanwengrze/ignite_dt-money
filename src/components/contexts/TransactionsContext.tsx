import { createContext, useEffect, useState } from "react";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[];
}

interface TransactionsProviderType {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({children}:TransactionsProviderType) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(){
    const response = await fetch("http://localhost:3000/transactions")
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider 
      value={{transactions}}
    >
      {children}
    </TransactionsContext.Provider>
  )
}