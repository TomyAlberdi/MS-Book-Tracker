import type { User, UserWithCredentials } from "@/lib/interfaces";
import { createContext } from "react";

export interface UserContextType {
  user: User | null;
  register: (user: UserWithCredentials) => void;
  login: (user: UserWithCredentials) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);