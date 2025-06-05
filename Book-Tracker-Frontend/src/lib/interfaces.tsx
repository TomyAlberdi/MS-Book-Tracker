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

// Search Books
export interface BookSearchResponse {
  numFound: number;
  start: number;
  docs: BookDoc[];
}

export interface BookDoc {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  edition_count?: number;
  subject?: string[];
  [key: string]: string | string[] | number | undefined;
}

export interface BookDetails {
  key: string;
  title: string;
  description?: string | { value: string };
  subjects?: string[];
  covers?: number[];
  authors?: { author: { key: string } }[];
  [key: string]:
    | string
    | number
    | string[]
    | number[]
    | { value: string }
    | { author: { key: string } }[]
    | undefined;
}

// Search Authors
export interface AuthorSearchResponse {
  numFound: number;
  start: number;
  docs: AuthorDoc[];
}

export interface AuthorDoc {
  key: string;
  name: string;
  birth_date?: string;
  top_work?: string;
  work_count?: number;
  top_subjects?: string[];
  [key: string]: string | string[] | number | undefined;
}

export interface AuthorDetails {
  key: string;
  name: string;
  birth_date?: string;
  bio?: string | { value: string };
  [key: string]: string | { value: string } | undefined;
}

export interface AuthorWorksResponse {
  entries: WorkEntry[];
  size: number;
  links?: string[];
  [key: string]: number | WorkEntry[] | string[] | undefined;
}

export interface WorkEntry {
  key: string;
  title: string;
  subject?: string[];
  first_publish_date?: string;
  [key: string]: string | string[] | undefined;
}
