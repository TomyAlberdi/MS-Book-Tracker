// TODO: Implement books search + filters

import BooksHeader from "@/components/Books/BooksHeader"
import BooksPagination from "@/components/Books/BooksPagination"
import { useState } from "react"
import { useTranslation } from "react-i18next"

// TODO: Create book card component
const BooksMain = () => {

  const { t } = useTranslation()

  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Search Books</h1>
      <BooksHeader />
      <BooksPagination />
    </div>
  )
}
export default BooksMain