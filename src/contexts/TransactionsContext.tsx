import {  useEffect, useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { api } from "../lib/axios";

export interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string,
  updatedAt: string
}

interface CreateTransactionInput {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome'
}

export interface UpdateTransactionInput {
  id: number,
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  transactions: Transaction[];
  filteredTransactions: Transaction[];
  isFiltering: boolean
  transaction: Transaction;
  fetchTransactions: () => Promise<void>
  filterTransactions: (query: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionInput) => Promise<void>
  deleteTransaction: (id: number) => Promise<void>
  updateTransaction: (transaction: UpdateTransactionInput) => Promise<void>
  getTransactionById: (id: number) => Promise<void>
}

interface TransactionsProviderType {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({children}:TransactionsProviderType) => {
  const [transaction, setTransaction] = useState<Transaction>({} as Transaction)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [isFiltering, setIsFiltering] = useState(false)

  const fetchTransactions = useCallback(
    async () => {
    const response = await api.get('/transactions')
    const data = response.data
    setTransactions(data)
    setFilteredTransactions(data)
    setIsFiltering(false)
   
  }, [])

  const filterTransactions = useCallback(
    async (query: string) => {
    if (query) {
      const filtered = 
        transactions.filter((item) =>
          item.description.toLowerCase().includes(query.toLowerCase())
        );
      setFilteredTransactions(filtered);
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
  }, [transactions]);

  const userId = localStorage.getItem("userId") || generateAndStoreUserId();
  function generateAndStoreUserId() {
    const newId = crypto.randomUUID();
    localStorage.setItem("userId", newId);
    return newId;
  }

  const createTransaction = useCallback(
    async (transaction: CreateTransactionInput) => {
    const response = await api.post('/transactions', {
      ...transaction,
      userId
    })
    setTransactions(state => [...state, response.data])

    localStorage.setItem('@ignite-dt-money:transactions-state-1.0.0', JSON.stringify(response.data))

    await fetchTransactions();
  }, [fetchTransactions])

  const deleteTransaction = useCallback(
    async (id: number) => {
    await api.delete(`/transactions/${id}`)

    setTransactions(prevTransactions => prevTransactions.filter(transaction => transaction.id !== id));

    setFilteredTransactions(prevFiltered => prevFiltered.filter(transaction => transaction.id !== id));
  }, [])

  const getTransactionById = useCallback(
    async (id: number) => {
    const response = await api.get(`/transactions/${id}`)
    setTransaction(response.data)
  }, [])

  const updateTransaction = useCallback(
    async (transaction:UpdateTransactionInput) => {
      const response = await api.put(`/transactions/${transaction.id}`, transaction)

      setTransactions(state => state.map(item => item.id === transaction.id ? response.data : item))
    await fetchTransactions();
    }, [fetchTransactions]) 

  useEffect(() => {
    fetchTransactions()

    const data = localStorage.getItem('@ignite-dt-money:transactions-state-1.0.0')
    const userId = localStorage.getItem("userId")
    if (data && userId) {
      setTransactions(JSON.parse(data))
    }
  }, [fetchTransactions])

  useEffect(() => {
    if (!isFiltering) {
      setFilteredTransactions(transactions);
    }
  }, [transactions, isFiltering]);



  return (
    <TransactionsContext.Provider 
      value={{
        transactions,
        filteredTransactions,
        fetchTransactions,
        filterTransactions,
        isFiltering,
        createTransaction,
        deleteTransaction,
        updateTransaction,
        getTransactionById,
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

export function useFilteredTransactions() {
  const filteredTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.filteredTransactions
  })

  return filteredTransactions
}

export function useFetchTransactions() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  return fetchTransactions
}

export function useFilterTransactions() {
  const filterTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.filterTransactions
  })

  return filterTransactions
}

export function useIsFiltering() {
  const isFiltering = useContextSelector(TransactionsContext, (context) => {
    return context.isFiltering
  })

  return isFiltering
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

export function useTransaction(){
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transaction
  }) 

  return transaction
}

export function useTransactionById(){
  const getTransactionById = useContextSelector(TransactionsContext, (context) => {
    return context.getTransactionById
  })

  return getTransactionById
}

