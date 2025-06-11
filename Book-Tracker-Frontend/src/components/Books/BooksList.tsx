import BookCard from "@/components/Books/BookCard";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useBookContext } from "@/context/UseBookContext";
import { AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const BooksList = () => {
  const { t } = useTranslation();
  const { paginatedBooks } = useBookContext();

  const listClasses =
    "h-auto min-h-[80vh] flex items-center justify-start flex-wrap gap-[1.5%] mt-2";

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
            className="aspect-video w-full mb-4 md:w-[32.325%] md:mb-[1.5%]"
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
