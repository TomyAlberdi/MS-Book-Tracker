import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { ReactNode } from "react";

interface BookContextComponentProps {
  children: ReactNode;
}

const BookContextComponent: React.FC<BookContextComponentProps> = ({
  children,
}) => {
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
