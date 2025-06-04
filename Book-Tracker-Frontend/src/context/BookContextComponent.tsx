import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { ReactNode } from "react";

interface BookContextComponentProps {
  children: ReactNode;
}

const BookContextComponent: React.FC<BookContextComponentProps> = ({
  children,
}) => {

  const BASE_URL = import.meta.env.VITE_GOOGLE_BASE_URL;
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  const paginatedSearchFields = "items(id,volumeInfo(title,authors,publishedDate,publisher,imageLinks,language))"
  const detailedSearchFields = "volumeInfo(title,authors,publisher,publishedDate,description,pageCount,categories,maturityRating,imageLinks,language)"

  //TODO: Implement paginated books search
  const getBooks = (
    maxResults: number,
    startIndex: number,
    searchTerms: string
  ) => {
    return {
      loading: true,
      data: [],
    };
  };

  //TODO: Implement book details request
  const getBook = (id: string) => {
    return {
      loading: true,
      data: null,
    };
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
