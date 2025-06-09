import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useBookContext } from "@/context/UseBookContext";
import type { PaginationInfo } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BooksPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  limit: number;
}

const BooksPagination = ({
  currentPage,
  setCurrentPage,
  limit,
}: BooksPaginationProps) => {
  const { t } = useTranslation();
  const { paginatedBooks } = useBookContext();

  const [paginationDropdownOpen, setPaginationDropdownOpen] = useState(false);

  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    first: true,
    last: true,
    totalAmount: 1,
  });

  const calculateTotalPages = () => {
    if (paginatedBooks.data === null) {
      return 0;
    }
    return Math.ceil(paginatedBooks.data.numFound / limit);
  };

  useEffect(() => {
    if (paginatedBooks.data === null) {
      return;
    }
    const totalPages = calculateTotalPages();
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;
    setPaginationInfo({
      first: isFirst,
      last: isLast,
      totalAmount: paginatedBooks.data.numFound,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginatedBooks.data]);

  const handlePreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage === paginationInfo.totalAmount) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleGoToPage = (page: number) => {
    if (page < 1 || page > paginationInfo.totalAmount || page === currentPage) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center mb-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious />
          </PaginationItem>
          {!paginationInfo.first && (
            <PaginationItem onClick={() => handleGoToPage(currentPage - 1)}>
              <PaginationLink>{currentPage - 1}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <DropdownMenu
              open={paginationDropdownOpen}
              onOpenChange={setPaginationDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <PaginationLink>{currentPage}</PaginationLink>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="inset-x-1/4">
                <DropdownMenuLabel className="text-center">{t("Pages")}</DropdownMenuLabel>
                {Array.from({ length: paginationInfo.totalAmount }, (_, i) => {
                  return (
                    <DropdownMenuItem
                      key={i + 1}
                      onClick={() => handleGoToPage(i + 1)}
                      className="flex items-center justify-center"
                    >
                      {i + 1}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </PaginationItem>
          {!paginationInfo.last && (
            <PaginationItem onClick={() => handleGoToPage(currentPage + 1)}>
              <PaginationLink>{currentPage + 1}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem onClick={handleNextPage}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default BooksPagination;
