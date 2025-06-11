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
  const totalPages = calculateTotalPages();

  useEffect(() => {
    if (paginatedBooks.data === null) {
      return;
    }
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

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const visibleMiddle = 5;
    const half = Math.floor(visibleMiddle / 2);

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    const start = Math.max(2, currentPage - half);
    const end = Math.min(totalPages - 1, currentPage + half);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-center items-center my-2">
      <Pagination>
        <PaginationContent>
          <PaginationItem onClick={handlePreviousPage}>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <DropdownMenu
              open={paginationDropdownOpen}
              onOpenChange={setPaginationDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <PaginationLink>{currentPage}</PaginationLink>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="inset-x-1/4">
                <DropdownMenuLabel className="text-center">
                  {t("Pages")}
                </DropdownMenuLabel>
                {getVisiblePages().map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() =>
                      typeof item === "number" && handleGoToPage(item)
                    }
                    className="flex items-center justify-center"
                    disabled={item === "..."}
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </PaginationItem>
          <PaginationItem onClick={handleNextPage}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
export default BooksPagination;
