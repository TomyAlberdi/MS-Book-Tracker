export interface User {
  username: string;
  token: string;
}

export interface UserWithCredentials {
  username: string;
  password: string;
}

export interface PartialBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
    language: string;
  }
}

export interface CompleteBook extends PartialBook {
  pageCount: number;
  maturityRating: string;
}