import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { ReactNode } from "react";
import { toast } from "sonner";

interface BookContextComponentProps {
  children: ReactNode;
}

const BookContextComponent: React.FC<BookContextComponentProps> = ({
  children,
}) => {
  const BASE_URL = import.meta.env.VITE_GOOGLE_BASE_URL;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const paginatedSearchFields =
    "items(id,volumeInfo(title,authors,publishedDate,publisher,imageLinks,language))";
  const detailedSearchFields =
    "volumeInfo(title,authors,publisher,publishedDate,description,pageCount,categories,maturityRating,imageLinks,language)";

  const getBooks = async (
    maxResults: string,
    startIndex: string,
    searchTerms: string
  ) => {
    const url =
      `${BASE_URL}?` +
      new URLSearchParams({
        q: searchTerms,
        fields: paginatedSearchFields,
        maxResults: maxResults,
        startIndex: startIndex,
        key: API_KEY,
      }).toString();
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Something went wrong while loading books.");
        return null;
      }
      const result = await response.json();
      return result.items;
    } catch (error) {
      toast.error("Something went wrong while loading books.");
      console.error(error);
      return null;
    }
  };

  const getBook = async (id: string) => {
    const url =
      `${BASE_URL}/${id}?` +
      new URLSearchParams({
        fields: detailedSearchFields,
        key: API_KEY,
      });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Something went wrong while loading the book.");
        return null;
      }
      const result = await response.json();
      return result;
    } catch (error) {
      toast.error("Something went wrong while loading the book.");
      console.error(error);
      return null;
    }
  };

  const exportData: BookContextType = {
    getBooks,
    getBook,
  };

  return (
    <BookContext.Provider value={exportData}>{children}</BookContext.Provider>
  );
};

export default BookContextComponent;
