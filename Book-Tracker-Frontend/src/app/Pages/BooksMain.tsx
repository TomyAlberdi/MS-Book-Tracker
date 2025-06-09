import BooksHeader from "@/components/Books/BooksHeader";
import BooksList from "@/components/Books/BooksList";
import BooksPagination from "@/components/Books/BooksPagination";
import { useBookContext } from "@/context/UseBookContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// TODO: Create book card component
const BooksMain = () => {
  const { t } = useTranslation();
  const { searchBooks } = useBookContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const LIMIT = 12;

  useEffect(() => {
    if (searchQuery) {
      searchBooks(searchQuery, currentPage, LIMIT);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, searchQuery]);

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold">{t("SearchBooks")}</h1>
      <BooksHeader setSearchQuery={setSearchQuery} />
      <BooksList />
      <BooksPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        limit={LIMIT}
      />
    </div>
  );
};
export default BooksMain;
