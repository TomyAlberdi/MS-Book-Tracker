import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useBookContext } from "@/context/UseBookContext";
import type { Edition, PartialWork } from "@/lib/interfaces";
import { useEffect, useState } from "react";

interface BookCardProps {
  work: PartialWork;
}

const BookCard = ({ work }: BookCardProps) => {
  const { getBestEditionForWork, getAuthors, getBookCoverUrl } =
    useBookContext();

  const [Edition, setEdition] = useState<Edition | null>(null);
  //TODO: Implement get book cover context function
  const [Cover, setCover] = useState<string | null>(null);
  const [authorsText, setAuthorsText] = useState<string | null>(null);

  const getAuthorsText = async (edition: Edition | null) => {
    let text;
    if (edition?.by_statement) {
      // remove "By " from by_statement
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

  if (!Edition) {
    return <Skeleton className="aspect-video w-full" />;
  }

  return (
    <Card className="aspect-video grid grid-cols-5 p-2 gap-2 hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer">
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
      <section className="col-span-3 flex flex-col justify-start items-start">
        <Tooltip>
          <TooltipTrigger asChild>
            <CardTitle className="font-semibold text-2xl w-full line-clamp-2 leading-normal">
              {Edition.title}
            </CardTitle>
          </TooltipTrigger>
          <TooltipContent>
            <CardTitle className="text-lg">{Edition.title}</CardTitle>
            <CardDescription>By {authorsText ?? "..."}</CardDescription>
          </TooltipContent>
        </Tooltip>
        <div>
          <CardDescription className="line-clamp-2">
            By {authorsText ?? "..."}
          </CardDescription>
        </div>
      </section>
    </Card>
  );
};
export default BookCard;
