import type { User } from "@/lib/interfaces";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const loadUserFromStorage = (): User | null => {
  const stored = localStorage.getItem(import.meta.env.VITE_USER_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};