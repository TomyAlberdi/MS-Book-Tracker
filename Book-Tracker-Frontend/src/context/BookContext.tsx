import type { PaginatedSearchResult, PartialWork } from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  //TODO: Create context type functions (use Obsidian vault data)
  paginatedBooks: PaginatedSearchResult<PartialWork>;
  searchBooks: (query: string, page: number, limit: number) => void;
}

export const BookContext = createContext<BookContextType | null>(null);
