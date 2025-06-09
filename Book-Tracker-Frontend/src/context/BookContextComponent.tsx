import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { PaginatedSearchResult, PartialWork } from "@/lib/interfaces";
import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface BookContextComponentProps {
  children: ReactNode;
}

const BookContextComponent: React.FC<BookContextComponentProps> = ({
  children,
}) => {
  const { t } = useTranslation();

  const BASE_URL = import.meta.env.VITE_BOOKS_BASE_URL;
  const IMAGES_URL = import.meta.env.VITE_BOOKS_IMAGES_URL;
  const PAGINATED_BOOKS_FIELDS =
    "title,key,author_key,author_name,first_publish_year";
  //TODO: research book cover request

  const [paginatedBooks, setPaginatedBooks] = useState<
    PaginatedSearchResult<PartialWork>
  >({
    loading: true,
    data: null,
  });

  const searchBooks = async (query: string, page: number, limit: number) => {
    setPaginatedBooks({
      loading: true,
      data: null,
    });
    try {
      const response = await fetch(
        `${BASE_URL}/search.json?` +
          new URLSearchParams({
            q: query,
            fields: PAGINATED_BOOKS_FIELDS,
            page: page.toString(),
            limit: limit.toString(),
          }).toString()
      );
      const responseData = await response.json();
      if (!response.ok) {
        toast.error(t("FailedSearchQuery"));
        console.log(responseData);
      }
      setPaginatedBooks({
        ...paginatedBooks,
        data: responseData,
      });
    } catch (error) {
      toast.error(t("FailedSearchQuery"));
      console.error(error);
    } finally {
      setPaginatedBooks({
        ...paginatedBooks,
        loading: false,
      });
    }
  };

  const exportData: BookContextType = {
    paginatedBooks,
    searchBooks,
  };

  return (
    <BookContext.Provider value={exportData}>{children}</BookContext.Provider>
  );
};

export default BookContextComponent;
