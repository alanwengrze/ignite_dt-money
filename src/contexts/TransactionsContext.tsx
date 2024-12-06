import {  useEffect, useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { api } from "../lib/axios";

export interface Transaction {
  id: string,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

interface CreateTransactionInput {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[];
  transaction: Transaction;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
  updateTransaction: (transaction: Transaction) => Promise<void>
}

interface TransactionsProviderType {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({children}:TransactionsProviderType) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [transaction, setTransaction] = useState<Transaction>({} as Transaction)

  const fetchTransactions = useCallback(
    async (query?: string) => {
    const response = await api.get('/transactions')
    const data = response.data
    
    const filteredTransactions = query
    ? data.filter((item: Transaction) => item.description.toLowerCase().includes(query.toLowerCase()))
    : data
    setTransactions(filteredTransactions)

    localStorage.setItem('@ignite-dt-money:transactions-state-1.0.0', JSON.stringify(data))
  }, [])

  const createTransaction = useCallback(
    async (transaction: CreateTransactionInput) => {
    const {description, price, category, type} = transaction
    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    })

    setTransactions(state => [...state, response.data])
  }, [])

  const deleteTransaction = useCallback(
    async (id: string) => {
    await api.delete(`/transactions/${id}`)
    setTransactions(state => state.filter(transaction => transaction.id !== id))
  }, [])

  const updateTransaction = async (transaction: Transaction) => {
    const response = await api.put(`/transactions/${transaction.id}`, transaction)
    setTransactions(state => state.map(item => item.id === transaction.id ? response.data : item))
    setTransaction(response.data)
  }

  useEffect(() => {
    fetchTransactions()

    const data = localStorage.getItem('@ignite-dt-money:transactions-state-1.0.0')

    if (data) {
      setTransactions(JSON.parse(data))
    }
  }, [fetchTransactions])


  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
        updateTransaction,
        transaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return transactions
}

export function useFetchTransactions() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  return fetchTransactions
}

export function useCreateTransaction() {
  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })

  return createTransaction
}

export function useDeleteTransaction() {
  const deleteTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.deleteTransaction
  })

  return deleteTransaction
}

export function useUpdateTransaction() {
  const updateTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.updateTransaction
  })

  return updateTransaction
}

export function useTransaction() {
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transaction
  })

  return transaction
}