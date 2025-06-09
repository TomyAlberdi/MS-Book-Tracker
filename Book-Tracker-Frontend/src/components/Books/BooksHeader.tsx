import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface BooksHeaderProps {
  setSearchQuery: (query: string) => void;
}

const BooksHeader = ({ setSearchQuery }: BooksHeaderProps) => {
  const { t } = useTranslation();

  const [LocalSearchQuery, setLocalSearchQuery] = useState("");

  const handleSearch = () => {
    if (LocalSearchQuery === "") {
      toast.error(t("SearchEmpty"));
      return;
    }
    setSearchQuery(LocalSearchQuery);
  };

  return (
    <div className="py-2 flex gap-2 items-center">
      <Input
        className="w-full md:w-1/3"
        placeholder={t("TypeSearchQuery")}
        onChange={(e) => setLocalSearchQuery(e.target.value)}
        value={LocalSearchQuery}
      />
      <Button className="flex items-center" onClick={handleSearch}>
        <Search className="bigger-icon" />
      </Button>
    </div>
  );
};
export default BooksHeader;
