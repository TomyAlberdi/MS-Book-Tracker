import type { BookContextType } from "@/context/BookContext";
import { BookContext } from "@/context/BookContext";
import type {
  Edition,
  PaginatedSearchResult,
  PartialWork,
} from "@/lib/interfaces";
import { findEditionCoverKey, sortEditionsByPriority } from "@/lib/utils";
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
  const IMAGES_URL = import.meta.env.VITE_BOOKS_IMAGES_URL;

  const [paginatedBooks, setPaginatedBooks] = useState<
    PaginatedSearchResult<PartialWork>
  >({
    loading: false,
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
        data: responseData,
        loading: false,
      });
    } catch (error) {
      toast.error(t("FailedSearchQuery"));
      console.error(error);
      setPaginatedBooks({
        data: null,
        loading: false,
      });
    }
  };

  const getBestEditionForWork = async (workKey: string) => {
    try {
      const url = `${BASE_URL}${workKey}/editions.json?limit=100`;
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

  const getBookCoverUrl = (edition?: Edition, size?: string) => {
    if (!edition) return null;
    const coverKey = findEditionCoverKey(edition);
    if (!coverKey) return null;
    return `${IMAGES_URL}/b${coverKey}-${size}.jpg`;
  };

  const getAuthor = async (authorKey: string) => {
    console.log(authorKey);
    try {
      const url = `${BASE_URL}${authorKey}.json`;
      const res = await fetch(url);
      if (!res.ok) {
        console.warn("No authors found for author:", authorKey);
        return null;
      }
      const data = await res.json();
      return data.name;
    } catch (err) {
      console.error("Failed to fetch authors", err);
      return null;
    }
  };

  const getAuthors = async (authorsCode: { key: string }[]) => {
    const authors = await Promise.all(
      authorsCode.map(async (author) => {
        const authorData = await getAuthor(author.key);
        return authorData;
      })
    );
    return authors.join(" and ");
  };

  const exportData: BookContextType = {
    paginatedBooks,
    searchBooks,
    getBestEditionForWork,
    getBookCoverUrl,
    getAuthor,
    getAuthors,
  };

  return (
    <BookContext.Provider value={exportData}>{children}</BookContext.Provider>
  );
};

export default BookContextComponent;
