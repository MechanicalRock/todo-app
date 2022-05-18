import { createContext, useContext } from "react"
export const UserContext = createContext<any>({user: {}, setUser: () => {}})
export const useGlobalUserContext = () => useContext(UserContext)

