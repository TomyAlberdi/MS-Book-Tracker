import BookCardContextMenuContent from "@/app/Pages/Books/BookCardContextMenuContent";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  ContextMenu, ContextMenuTrigger
} from "@/components/ui/context-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBookContext } from "@/context/UseBookContext";
import type { Edition, PartialWork } from "@/lib/interfaces";
import {
  BookPlus
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BookCardProps {
  work: PartialWork;
}

const BookCard = ({ work }: BookCardProps) => {
  const { t } = useTranslation();
  const { getBestEditionForWork, getAuthors, getBookCoverUrl } =
    useBookContext();

  const [Edition, setEdition] = useState<Edition | null>(null);
  const [Cover, setCover] = useState<string | null>(null);
  const [authorsText, setAuthorsText] = useState<string | null>(null);

  const getAuthorsText = async (edition: Edition | null) => {
    let text;
    if (edition?.by_statement) {
      text = edition.by_statement.replace("By ", "").replace("by ", "");
    } else if (work.author_name) {
      text = work.author_name.join(", ");
    } else if (edition?.authors) {
      text = await getAuthors(edition.authors);
    } else {
      text = "author unknown";
    }
    setAuthorsText(text ?? null);
  };

  useEffect(() => {
    const fetchEdition = async () => {
      const edition = await getBestEditionForWork(work.key);
      setEdition(edition);
      getAuthorsText(edition);
      setCover(getBookCoverUrl(edition ?? undefined, "M"));
    };
    fetchEdition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [work.key]);

  const getLanguageTag = (languages: { key?: string }[]) => {
    const langKey = languages?.[0]?.key;
    return langKey ? langKey.substring(langKey.length - 3) : "";
  };

  if (!Edition) {
    return <Skeleton className="aspect-video w-full" />;
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="relative aspect-video grid grid-cols-5 p-2 gap-2 hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer">
          {Edition.languages && (
            <div className="absolute top-3 left-0 z-10 flex justify-center items-center px-3 py-1 bg-primary text-secondary font-bold shadow-lg rounded-r-lg">
              {getLanguageTag(Edition.languages)}
            </div>
          )}
          <section className="col-span-2">
            {Cover ? (
              <div
                className="rounded-md h-full w-full bg-contain bg-center bg-no-repeat bg-muted"
                style={{ backgroundImage: `url(${Cover})` }}
              ></div>
            ) : (
              <Skeleton className="h-full w-full rounded-xl" />
            )}
          </section>
          <section className="col-span-3 flex flex-col justify-start items-start gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <CardTitle className="font-semibold text-lg md:text-2xl w-full line-clamp-2 leading-tight md:leading-normal">
                  {Edition.title}
                </CardTitle>
              </TooltipTrigger>
              <TooltipContent>
                <CardTitle className="text-lg">{Edition.title}</CardTitle>
                <CardDescription>By {authorsText ?? "..."}</CardDescription>
              </TooltipContent>
            </Tooltip>
            {Edition.subtitle && (
              <div className="text-sm text-md line-clamp-2">
                <span>{Edition.subtitle}</span>
              </div>
            )}
            <div>
              <CardDescription className="py-1 px-2 rounded-lg bg-muted line-clamp-2 text-sm md:text-md">
                By {authorsText ?? "..."}
              </CardDescription>
            </div>
            <Button className="w-full mt-auto">
              <BookPlus />
              {t("ViewMore")}
            </Button>
          </section>
        </Card>
      </ContextMenuTrigger>
      <BookCardContextMenuContent />
    </ContextMenu>
  );
};
export default BookCard;
