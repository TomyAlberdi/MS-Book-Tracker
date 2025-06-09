import { useBookContext } from "@/context/UseBookContext"
import { useTranslation } from "react-i18next"

const BooksList = () => {

  const { t } = useTranslation()
  const { paginatedBooks } = useBookContext()

  if (!paginatedBooks.loading && paginatedBooks.data === null) {
    return (
      <div className="h-full flex flex-col items-center justify-center border border-blue-500">
        s
      </div>
    )
  }
}
export default BooksList