import { createContext, ReactNode, useContext } from "react";

interface DataProviderProps {
  children: ReactNode;
}

interface DataContext {
  page: any;
}

export const DataContext = createContext({} as DataContext);

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const page = 3;

  return (
    <DataContext.Provider
      value={{
        page,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
