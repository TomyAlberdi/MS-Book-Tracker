import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from "@/components/ui/context-menu";
import {
  BookHeart,
  BookOpenText,
  BookPlus,
  Clock4,
  NotebookPen,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const BookCardContextMenuContent = () => {
  const { t } = useTranslation();

  return (
    <ContextMenuContent className="w-52">
      <ContextMenuItem inset>
        {t("Reading")}
        <ContextMenuShortcut>
          <BookOpenText />
        </ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset>
        {t("WantToRead")}
        <ContextMenuShortcut>
          <Clock4 />
        </ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset>
        {t("AddToDiary")}
        <ContextMenuShortcut>
          <BookHeart />
        </ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        {t("Review")}
        <ContextMenuShortcut>
          <NotebookPen />
        </ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        {t("ViewBookDetails")}
        <ContextMenuShortcut>
          <BookPlus />
        </ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  );
};
export default BookCardContextMenuContent;
