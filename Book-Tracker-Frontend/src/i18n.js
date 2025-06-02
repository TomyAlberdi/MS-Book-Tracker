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
      // Utils
      Settings: "Settings",
      Search: "Search",
      NoResultsFound: "No results found",
      Language: "Language",
      CurrentLanguage: "English",
      Home: "Home",
      ViewMore: "View More",
      Back: "Back",
      Name: "Name",
      EnterName: "Enter your name",
      Email: "Email",
      EnterEmail: "Enter your email",
      Message: "Message",
      EnterMessage: "Enter your message",
      Send: "Send",
      SendingEmail: "Sending email...",
      InvalidEmail: "Invalid email",
      MessageEmpty: "Message cannot be empty",
      NameEmpty: "Name cannot be empty",
      EmailSent: "Email sent successfully",
      EmailError: "Error sending email",
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
      // Utils
      Settings: "Ajustes",
      Search: "Buscar",
      NoResultsFound: "No se encontraron resultados",
      Language: "Idioma",
      CurrentLanguage: "Español",
      Home: "Inicio",
      ViewMore: "Ver Más",
      Back: "Atrás",
      Name: "Nombre",
      EnterName: "Ingrese su nombre",
      Email: "Email",
      EnterEmail: "Ingrese su email",
      Message: "Mensaje",
      EnterMessage: "Ingrese su mensaje",
      Send: "Enviar",
      SendingEmail: "Enviando email...",
      InvalidEmail: "Email inválido",
      MessageEmpty: "El mensaje no puede estar vacío",
      NameEmpty: "El nombre no puede estar vacío",
      EmailSent: "Email enviado correctamente",
      EmailError: "Error enviando email",
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
