import { useContext, createContext, ReactNode, useEffect, useState } from "react";



interface IAuthContext {
    spanish: boolean;
    setSpanish: (spanish: boolean) => void;


}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthContextProviderProps {
  children: ReactNode;
}




export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [spanish, setSpanish] = useState<boolean>(false)

    return <AuthContext.Provider value={{spanish, setSpanish }}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};