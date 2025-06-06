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

// Search Authors
//TODO: Create author interfaces (partial and complete)