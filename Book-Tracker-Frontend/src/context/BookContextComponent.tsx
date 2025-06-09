import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type { PaginatedSearchResult, PartialWork } from "@/lib/interfaces";
import { sortEditionsByPriority } from "@/lib/utils";
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
  const PAGINATED_BOOKS_FIELDS = "key,cover_edition_key,title";
  //TODO: research book cover request
  const IMAGES_URL = import.meta.env.VITE_BOOKS_IMAGES_URL;

  const [paginatedBooks, setPaginatedBooks] = useState<
    PaginatedSearchResult<PartialWork>
  >({
    loading: true,
    data: null,
  });

  //TODO: Refine logic: fetch works with this function, show names on loading skeleton cards
  // Each card calls getBestEditionForWork with the key to get the rest of the info
  // (same with future complete edition page component)
  // Default to calling cover_edition_key
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

  const getBestEditionForWork = async (workKey: string) => {
    try {
      const url = `${BASE_URL}/works/${workKey}/editions.json?limit=100`;
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || !data?.entries?.length) {
        console.warn("No editions found for work:", workKey);
        return null;
      }

      const sorted = sortEditionsByPriority(data.entries);
      return sorted[0]; // Best edition
    } catch (err) {
      console.error("Failed to fetch editions", err);
      return null;
    }
  };

  const exportData: BookContextType = {
    paginatedBooks,
    searchBooks,
    getBestEditionForWork,
  };

  return (
    <BookContext.Provider value={exportData}>{children}</BookContext.Provider>
  );
};

export default BookContextComponent;
