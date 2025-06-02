import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Auth
      Register: "Register",
      CreateAccount: "Create an Account.",
      Username: "Username",
      Password: "Password",
      ConfirmPassword: "Confirm Password",
      ExistingUsername: "Username already exists.",
      InvalidPassword: "Invalid password.",
      Login: "Login",
      Logout: "Logout",
      // Settings
      Settings: "Settings",
      SettingsDescription: "Customize your settings.",
      DarkMode: "Dark Mode",
      Language: "Language",
      CurrentLanguage: "English",
      English: "English",
      Spanish: "Spanish",
      // Feedback
      Feedback: "Feedback",
      FeedbackDescription: "Send us your feedback about the app.",
      Email: "Email",
      Message: "Message",
      SendFeedback: "Send Feedback",
      SendingFeedback: "Sending feedback...",
      FeedbackSent: "Feedback sent successfully.",
    },
  },
  es: {
    translation: {
      // Auth
      Register: "Registrarse",
      CreateAccount: "Crear una cuenta.",
      Username: "Nombre de usuario",
      Password: "Contraseña",
      ConfirmPassword: "Confirmar contraseña",
      ExistingUsername: "El nombre de usuario ya existe.",
      InvalidPassword: "Contraseña inválida.",
      Login: "Iniciar sesión",
      Logout: "Cerrar sesión",
      // Settings
      Settings: "Ajustes",
      SettingsDescription: "Personaliza tus ajustes.",
      DarkMode: "Modo oscuro",
      Language: "Idioma",
      CurrentLanguage: "Español",
      English: "Inglés",
      Spanish: "Español",
      // Feedback
      Feedback: "Comentarios",
      FeedbackDescription: "Envíanos tus comentarios sobre la aplicación.",
      Email: "Email",
      Message: "Mensaje",
      SendFeedback: "Enviar Comentarios",
      SendingFeedback: "Enviando comentarios...",
      FeedbackSent: "Comentarios enviados con éxito.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
