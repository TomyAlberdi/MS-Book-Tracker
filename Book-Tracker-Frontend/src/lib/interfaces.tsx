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
  author_name: string[];
}

export interface Edition {
  publishers?: string[];
  identifiers?: {
    goodreads?: string[];
    librarything?: string[];
  };
  series?: string[];
  pagination?: string;
  covers?: number[];
  local_id?: string[];
  url?: string[];
  key?: string;
  authors?: {
    key: string;
  }[];
  publish_places?: string[];
  subjects?: string[];
  uri_descriptions?: string[];
  edition_name?: string;
  genres?: string[];
  source_records?: string[];
  title?: string;
  notes?: string;
  number_of_pages?: number;
  languages?: {
    key?: string;
  }[];
  publish_date?: string;
  publish_country?: string;
  by_statement?: string;
  works?: {
    key?: string;
  }[];
  type?: {
    key?: string;
  };
  uris?: string[];
  subtitle?: string;
  ocaid?: string;
  isbn_10?: string[];
  isbn_13?: string[];
  oclc_numbers: string[];
  lccn?: string[];
  dewey_decimal_class?: string[];
  lc_classifications?: string[];
  latest_revision?: number;
  revision?: number;
  created?: {
    type?: string;
    value?: string;
  };
  last_modified?: {
    type?: string;
    value?: string;
  };
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
