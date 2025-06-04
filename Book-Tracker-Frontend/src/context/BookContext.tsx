import type { Response } from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  getBooks: (
    maxResults: number,
    startIndex: number,
    searchTerms: string
  ) => Response;
  getBook: (id: string) => Response;
}

export const BookContext = createContext<BookContextType | null>(null);
