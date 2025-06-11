import { Card } from "@/components/ui/card";
import type { PartialWork } from "@/lib/interfaces";

interface BookCardProps {
  work: PartialWork;
}

//TODO: call getBestEditionForWork with work.key
//TODO: fix cards not wrapping in list
const BookCard = ({ work }: BookCardProps) => {
  return (
    <Card className="aspect-video w-full mb-4 md:w-[32.325%] md:mb-[1.5%]">
      {work?.title}
    </Card>
  )
}
export default BookCard