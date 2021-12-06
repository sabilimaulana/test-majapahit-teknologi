import { createContext } from "react"

export const GlobalContext = createContext({});

export default function ContextProvider({
  children,
  value,
}) {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
