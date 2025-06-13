import BookCard from "@/app/Pages/Books/BookCard";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useBookContext } from "@/context/UseBookContext";
import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const BooksList = () => {
  const { t } = useTranslation();
  const { paginatedBooks } = useBookContext();

  const listClasses =
    "h-auto min-h-[80vh] grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"; 

  if (!paginatedBooks.loading && paginatedBooks.data === null) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <Alert variant={"destructive"} className="w-auto">
          <AlertCircle />
          <AlertTitle>{t("NoBooksFound")}</AlertTitle>
        </Alert>
      </div>
    );
  }

  if (paginatedBooks.loading) {
    return (
      <div className={listClasses}>
        {Array.from({ length: 9 }, (_, i) => (
          <Skeleton
            key={i}
            className="aspect-video w-full"
          />
        ))}
      </div>
    );
  }

  if (!paginatedBooks.loading && paginatedBooks.data !== null) {
    return (
      <div className={listClasses}>
        {paginatedBooks.data.docs.map((work) => (
          <BookCard work={work} key={work.key} />
        ))}
      </div>
    );
  }
};
export default BooksList;
