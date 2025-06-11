import { Card } from "@/components/ui/card";
import type { PartialWork } from "@/lib/interfaces";

interface BookCardProps {
  work: PartialWork;
}

//TODO: call getBestEditionForWork with work.key
const BookCard = ({ work }: BookCardProps) => {
  return (
    <Card className="aspect-video w-full">
      {work?.title}
    </Card>
  )
}
export default BookCard