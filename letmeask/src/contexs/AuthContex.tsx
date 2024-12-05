import { createContext, ReactNode } from "react";


type Value = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  value: Value | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  chindren: ReactNode;
}


export const AuthContext = createContext({} as AuthContextType); 

export function AuthContextProvider(props: AuthContextProviderProps) {
  return (

  <AuthContext.Provider value={{ value, signInWithGoogle }}>
    {props.children}
  </AuthContext.Provider>

  );
}