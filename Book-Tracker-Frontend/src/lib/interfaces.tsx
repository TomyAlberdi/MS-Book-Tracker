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

//TODO: Create work and edition interfaces (partial and complete)
export interface PartialWork {
  author_key: string;
  author_name: string;
  cover_edition_key: string;
  edition_count: number;
  first_publish_year: number;
  key: string;
  title: string;
}

export interface CompleteWork {
  title: string;
  authors: [
    author: {
      key: string;
    },
    type: {
      key: string;
    }
  ],
  type: {
    key: string;
  },
  covers: number[],
  description: string,
  subjects: string[],
}

export interface Edition {
  title: string;
  publishers: string[];
  publish_date: string;
  key: string;
  covers: number[];
}

// Search Authors
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