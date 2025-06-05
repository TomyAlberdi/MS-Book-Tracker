import type { AuthorDetails, AuthorDoc, BookDetails, BookDoc, WorkEntry } from "@/lib/interfaces";
import { createContext } from "react";

export interface BookContextType {
  searchBooks: (
    maxResults: string,
    page: string,
    searchTerms: string
  ) => Promise<BookDoc[] | null>;

  getBookDetails: (workId: string) => Promise<BookDetails | null>;

  searchAuthors: (
    query: string,
    page?: string
  ) => Promise<AuthorDoc[] | null>;

  getAuthorDetails: (authorId: string) => Promise<AuthorDetails | null>;

  getWorksByAuthor: (
    authorId: string,
    limit?: string,
    offset?: string
  ) => Promise<WorkEntry[] | null>;
}

export const BookContext = createContext<BookContextType | null>(null);
