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
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

export interface CompleteBook extends PartialBook {
  publishedDate: string;
  pageCount: number;
  maturityRating: string;
  publisher: string;
  language: string;
}