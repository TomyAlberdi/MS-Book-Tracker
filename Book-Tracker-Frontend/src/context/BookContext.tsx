import type { Edition, PaginatedSearchResult, PartialWork } from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  paginatedBooks: PaginatedSearchResult<PartialWork>;
  searchBooks: (query: string, page: number, limit: number) => void;
  getBestEditionForWork: (workKey: string) => Promise<Edition | null>;
}

export const BookContext = createContext<BookContextType | null>(null);
