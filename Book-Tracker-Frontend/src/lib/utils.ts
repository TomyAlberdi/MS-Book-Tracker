import type { Edition, User } from "@/lib/interfaces";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loadUserFromStorage = (): User | null => {
  const stored = localStorage.getItem(import.meta.env.VITE_USER_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export function scoreEdition(edition: Edition): number {
  const lang = edition.languages?.[0]?.key ?? "";
  //const ebook = edition.ebook_access;
  const hasCover = edition.covers !== undefined;
  const hasOcaid = !!edition.ocaid;

  return (
    (lang.includes("eng") ? 40 : 0) +
    //(ebook === "public" ? 10 : ebook === "borrowable" ? 8 : ebook === "printdisabled" ? 2: 0) +
    (hasCover ? 2 : 0) +
    (hasOcaid ? 1 : 0)
  );
}

export function sortEditionsByPriority(editions: Edition[]): Edition[] {
  return [...editions].sort((a, b) => scoreEdition(b) - scoreEdition(a));
}

export function findEditionCoverKey(edition: Edition): string | null {
  if (edition.covers) return `/id/${edition.covers[0]}`;
  if (edition.isbn_10) return `/isbn/${edition.isbn_10[0]}`;
  if (edition.isbn_13) return `/isbn/${edition.isbn_13[0]}`;
  if (edition.lccn) return `/lccn/${edition.lccn[0]}`;
  if (edition.oclc_numbers) return `/oclc/${edition.oclc_numbers[0]}`;
  return null;
}