import { createContext, ReactNode, useEffect, useState } from "react";

import { useHistory } from 'react-router-dom'

import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from "../utils/api";

type UserStorageProps = {
  children: ReactNode;
};

type UserLoginType = {
  username: string;
  password: string;
};

type User = {
  id: number;
  email: string;
  nome: string;
  username: string;
};

type DataUserType = {
  data: User | null 
}


export const UserContext = createContext({} as any);


export default function UserStorage({ children }: UserStorageProps) {
  const [data, setData] = useState(null as any);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [logged, setLogged]  = useState(false)
  const history = useHistory()

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
        } finally {
          setLogged(false)
          setLoading(false);
        }
      }
    };

    autoLogin();
  }, []);

  const getUser = async (token: string) => {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogged(true)
    history.push('/')
  };

  const userLogin = async (user: UserLoginType) => {
    const { url, options } = TOKEN_POST(user);

    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      localStorage.setItem("token", token);
      getUser(token);
    } catch (error: any) {
      setLogged(false)
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem('token')
    setLogged(false)
    setError(false)
    setLoading(false)
    setData(false)
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading, logged, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}