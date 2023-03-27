import { createContext, ReactNode, useContext } from "react";

interface PaginationProviderProps {
  children: ReactNode;
}

interface PaginationContext {
  page: any;
}

export const PaginationContext = createContext({} as PaginationContext);

export const usePagination = () => {
  return useContext(PaginationContext);
};

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const page = 3;

  return (
    <PaginationContext.Provider
      value={{
        page,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
