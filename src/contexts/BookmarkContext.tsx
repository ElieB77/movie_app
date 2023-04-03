import { CardType } from "@/types/card";
import { createContext, ReactNode, useContext, useState } from "react";

interface BookmarkProviderProps {
  children: ReactNode;
}

interface BookmarkContext {
  storeMovieToLS: any;
}

export const BookmarkContext = createContext({} as BookmarkContext);

export const useBookmark = () => {
  return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const [savedMovies, setSavedMovies] = useState<string[]>([]);

  const storeMovieToLS = (arg: CardType) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("id", `${arg.title}`);
    }
    return "";
  };

  return (
    <BookmarkContext.Provider
      value={{
        storeMovieToLS,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
