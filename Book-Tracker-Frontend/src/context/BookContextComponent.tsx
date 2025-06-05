import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { ReactNode } from "react";

interface BookContextComponentProps {
  children: ReactNode;
}

const BookContextComponent: React.FC<BookContextComponentProps> = ({
  children,
}) => {
  const BASE_URL = import.meta.env.VITE_BOOKS_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_BOOKS_IMAGES_URL
  //TODO: research book cover request
  //TODO: Create context type functions (use Obsidian vault data)


  const exportData: BookContextType = {
  };

  return (
    <BookContext.Provider value={exportData}>{children}</BookContext.Provider>
  );
};

export default BookContextComponent;
