import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
interface UserData {
  user : {
    name: string;
    email: string;
    password: string;
  },
  token: string
}


interface AuthContextType {
  data: UserData;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}:AuthContextProviderProps) => {
  const [data, setData] = useState<UserData>({} as UserData);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      })
      const {user, token} = response.data

      localStorage.setItem('@dt-money:user', JSON.stringify(user))
      localStorage.setItem('@dt-money:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({user, token})
    }catch (error) {
      if(error){
        alert('Usuário ou senha inválidos')
      }else {
        alert('Erro no servidor')
      }
    }
  }

  async function signUp(name: string, email: string, password: string) {
    try {
      await api.post('/users', {
        name,
        email,
        password
      })
      alert('Usuário criado com sucesso!')
    }catch (error) {
      if(error){
        alert("Não foi possível criar o usuário")
      }else {
        alert('Erro no servidor')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@dt-money:user')
    localStorage.removeItem('@dt-money:token')
    setData({} as UserData)
  }
  useEffect(() => {
    const token = localStorage.getItem('@dt-money:token')
    const user = localStorage.getItem('@dt-money:user')

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        user: JSON.parse(user), 
        token
      })
    }
  }, [])
  return <AuthContext.Provider value={{
    data: data,
    signIn,
    signUp,
    signOut
  }}>
    {children}
  </AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}