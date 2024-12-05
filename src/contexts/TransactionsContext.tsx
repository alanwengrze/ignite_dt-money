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
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
}

interface TransactionsProviderType {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({children}:TransactionsProviderType) => {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(
    async (query?: string) => {
    const response = await api.get('/transactions')
    const data = response.data
    
    const filteredTransactions = query
    ? data.filter((item: Transaction) => item.description.toLowerCase().includes(query.toLowerCase()))
    : data
    setTransactions(filteredTransactions)
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

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        deleteTransaction,
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
