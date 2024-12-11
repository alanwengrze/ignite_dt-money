import {  useEffect, useState, useCallback, useMemo } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { api } from "../lib/axios";

export interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: Date,
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
  filterTransactionsToType: (type: 'income' | 'outcome') => Promise<void>;
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

  const user_id = useMemo(() => {
    let existingUserId = localStorage.getItem("@dt-money:user_id");
    if (!existingUserId) {
      existingUserId = crypto.randomUUID();
      localStorage.setItem("@dt-money:user_id", existingUserId);
    }
    return existingUserId;
  }, []);

  const fetchTransactions = useCallback(
    async () => {
    const response = await api.get('/transactions', {
      params: {
        user_id
      }
    })
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

  const filterTransactionsToType = useCallback(
    async (query: string) => {
    if (query) {
      const filtered = 
        transactions.filter((item) =>
          item.type.toLowerCase().includes(query.toLowerCase())
        );
      setFilteredTransactions(filtered);
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
    
  }, [transactions]);

  const createTransaction = useCallback(
    async (transaction: CreateTransactionInput) => {
    const response = await api.post(`/transactions?user_id=${user_id}`, {
      ...transaction
    })

    setTransactions(state => [...state, response.data])

    await fetchTransactions();
  }, [fetchTransactions])

  const deleteTransaction = useCallback(
    async (id: number) => {
    await api.delete(`/transactions/${id}`, {
      params: {
        user_id
      }
    })

    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);

    setTransactions(updatedTransactions)

    await fetchTransactions()
  }, [])

  const getTransactionById = useCallback(
    async (id: number) => {
    const response = await api.get(`/transactions/${id}`, {
      params: {
        user_id
      }
    })
    setTransaction(response.data)
  }, [])

  const updateTransaction = useCallback(
    async (transaction:UpdateTransactionInput) => {
      const response = await api.put(`/transactions/${transaction.id}`,
      transaction,
        { params : { user_id } }
      )

      setTransactions(state => state.map(item => item.id === transaction.id ? response.data : item))

      await fetchTransactions();

    }, []) 

  useEffect(() => {
    fetchTransactions()

  }, [fetchTransactions])

  useEffect(() => {
    const storageKey = `@dt-money:${user_id}-transactions`;
    const storedTransactions = localStorage.getItem(storageKey);
  
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    } else {
      setTransactions([]); 
    }
  }, [user_id]);


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
        filterTransactionsToType,
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

export function useFilterTransactionsToType() {
  const filterTransactionsToType = useContextSelector(TransactionsContext, (context) => {
    return context.filterTransactionsToType
  })

  return filterTransactionsToType
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

