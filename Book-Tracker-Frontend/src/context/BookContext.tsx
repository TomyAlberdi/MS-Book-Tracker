import type {
  Edition,
  PaginatedSearchResult,
  PartialWork,
} from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  paginatedBooks: PaginatedSearchResult<PartialWork>;
  searchBooks: (query: string, page: number, limit: number) => void;
  getBestEditionForWork: (workKey: string) => Promise<Edition | null>;
  getBookCoverUrl: (edition?: Edition, size?: string) => string | null;
  getAuthor: (authorKey: string) => Promise<string | null>;
  getAuthors: (authorsCodes: { key: string }[]) => Promise<string | null>;
}

export const BookContext = createContext<BookContextType | null>(null);
