import { createContext, ReactNode, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCardProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCardProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
