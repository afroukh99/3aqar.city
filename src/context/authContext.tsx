import React, { createContext, useEffect, useState } from "react";
import { userType } from "../types/types";
import { InputsType } from "../pages/login/Login";
import axios from "axios";
import toast from "react-hot-toast";



interface AuthContextType {
    currentUser: userType;
    login(input: InputsType): void;
    register(input: userType): void;
    logout(): void;
}




export const AuthContext = createContext<AuthContextType | any>(null)




export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.ReactNode => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") as any) || null)


    const login = async (input: InputsType) => {
            const res: any = await axios.post("http://localhost:5000/api/auth/login", input)
            setCurrentUser(res.data.data)
    }


    const signup = async (input: userType) => {
            await axios.post("http://localhost:5000/api/auth/register", input)     
    }


    const logout = async () => {
            await axios.post("http://localhost:5000/api/auth/logout")
            localStorage.removeItem("user")
            setCurrentUser(null)
      
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])



    return (
        <AuthContext.Provider value={{ login, logout, signup, currentUser }} >
            {children}
        </AuthContext.Provider>
    )

}