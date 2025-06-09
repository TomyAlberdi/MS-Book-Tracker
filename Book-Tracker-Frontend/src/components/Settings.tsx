import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = (val: string) => {
    i18n.changeLanguage(val);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{t("Settings")}</DialogTitle>
        <DialogDescription>{t("SettingsDescription")}</DialogDescription>
      </DialogHeader>
      <section className="flex flex-col gap-6">
        <div className="flex items-center space-x-2">
          <Label className="text-md" htmlFor="dark-mode-switch">
            {t("DarkMode")}
          </Label>
          <Switch
            id="dark-mode-switch"
            checked={theme === "dark"}
            onCheckedChange={toggleDarkMode}
          />
        </div>
        <div className="flex flex-col gap-6">
          <Label className="text-md">{t("Language")}</Label>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button className="w-full">
                <span className="text-md">{t("CurrentLanguage")}</span>
                <ChevronsUpDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => toggleLanguage("en")}>
                {t("English")}
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => toggleLanguage("es")}>
                {t("Spanish")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </>
  );
};
export default Settings;
