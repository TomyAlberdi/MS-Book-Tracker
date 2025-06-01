export interface User {
  username: string;
}

export interface UserWithCredentials extends User {
  password: string;
}