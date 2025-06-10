// USER INTERFACES

export interface User {
  username: string;
  token: string;
}

export interface UserWithCredentials {
  username: string;
  password: string;
}

// BOOKS INTERFACES

export interface PartialWork {
  key: string;
  cover_edition_key: string;
  title: string;
}

export interface Edition {
  publishers?: string[];
  series?: string[];
  covers?: string[];
  key: string;
  authors?: { key: string }[];
  title?: string;
  number_of_pages?: number;
  languages?: { key: string }[];
  ebook_access?: string;
  ocaid?: string;
  publish_date?: string;
}

// AUTHORS INTERFACES
//TODO: Create author interfaces (partial and complete)

// UTILS

export interface PaginatedResult<T> {
  numFound: number;
  start: number;
  q: string;
  docs: T[];
}

export interface PaginatedSearchResult<T> {
  loading: boolean;
  data: PaginatedResult<T> | null;
}

export interface PaginationInfo {
  first: boolean;
  last: boolean;
  totalAmount: number;
}
