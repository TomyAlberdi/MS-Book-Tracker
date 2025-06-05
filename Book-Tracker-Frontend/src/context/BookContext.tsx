import type { CompleteBook, PartialBook } from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  getBooks: (
    maxResults: string,
    startIndex: string,
    searchTerms: string
  ) => Promise<PartialBook[] | null>;
  getBook: (id: string) => Promise<CompleteBook | null>;
}

export const BookContext = createContext<BookContextType | null>(null);
