import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useBookContext } from "@/context/UseBookContext";
import type { Edition, PartialWork } from "@/lib/interfaces";
import { useEffect, useState } from "react";

interface BookCardProps {
  work: PartialWork;
}

const BookCard = ({ work }: BookCardProps) => {
  const { getBestEditionForWork } = useBookContext();

  const [Edition, setEdition] = useState<Edition | null>(null);

  useEffect(() => {
    const fetchEdition = async () => {
      const edition = await getBestEditionForWork(work.key);
      setEdition(edition);
    };
    fetchEdition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [work.key]);

  if (!Edition) {
    return <Skeleton className="aspect-video w-full" />;
  }

  return <Card className="aspect-video w-full"></Card>;
};
export default BookCard;
