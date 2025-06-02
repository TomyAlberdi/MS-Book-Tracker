import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();

  const [collapsibleOpen, setCollapsibleOpen] = useState(false);

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
          <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
            <CollapsibleTrigger asChild>
              <Button className="w-full">
                <span className="text-md">{t("CurrentLanguage")}</span>
                <ChevronsUpDown />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-2 mt-2">
              <div
                className="rounded-md border px-4 py-2 font-mono text-sm cursor-pointer"
                onClick={() => toggleLanguage("en")}
              >
                {t("English")}
              </div>
              <div
                className="rounded-md border px-4 py-2 font-mono text-sm cursor-pointer"
                onClick={() => toggleLanguage("es")}
              >
                {t("Spanish")}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>
    </>
  );
};
export default Settings;
