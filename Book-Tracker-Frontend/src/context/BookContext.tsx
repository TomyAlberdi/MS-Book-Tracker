import { createContext } from "react";

export interface BookContextType {
  //TODO: Create context type functions (use Obsidian vault data)
}

export const BookContext = createContext<BookContextType | null>(null);
