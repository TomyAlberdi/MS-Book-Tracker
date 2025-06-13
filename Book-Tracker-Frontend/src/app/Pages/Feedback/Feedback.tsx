import ContactForm from "@/app/Pages/Feedback/ContactForm";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <>
      <DialogHeader>
        <DialogTitle>{t("Feedback")}</DialogTitle>
        <DialogDescription>{t("FeedbackDescription")}</DialogDescription>
      </DialogHeader>
      <ContactForm />
    </>
  );
};
export default Feedback;
