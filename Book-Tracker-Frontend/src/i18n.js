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
      RegisteringUser: "Registering user...",
      RegisteredSuccessfully: "Registered successfully.",
      AlreadyLoggedIn: "You are already logged in.",
      LoggingIn: "Logging in...",
      FailedAuthentication: "Something went wrong while authenticating: ",
      LoginSuccessful: "Logged in successfully.",
      NotLoggedIn: "You are not logged in.",
      LoggedOutSuccessfully: "Logged out successfully.",
      // Sidebar
      Books: "Books",
      Reading: "Reading",
      WantToRead: "Want to Read",
      Profile: "Profile",
      Diary: "Diary",
      Reviews: "Reviews",
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
      // Book Search
      SearchBooks: "Search Books",
      TypeSearchQuery: "Type Search Query",
      SearchEmpty: "Search cannot be empty.",
      FailedSearchQuery: "Something went wrong while searching.",
      Pages: "Pages",
      NoBooksFound: "No books found.",
      Previous: "Previous",
      Next: "Next",
      BookCardError: "An error occurred while loading this book.",
      ViewMore: "View More",
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
      RegisteringUser: "Registrando usuario...",
      RegisteredSuccessfully: "Registrado exitosamente.",
      AlreadyLoggedIn: "Ya has iniciado sesión.",
      LoggingIn: "Iniciando sesión...",
      FailedAuthentication: "Algo salió mal con la autenticación: ",
      LoginSuccessful: "Iniciado sesión exitosamente.",
      NotLoggedIn: "No se ha iniciado sesión.",
      LoggedOutSuccessfully: "Sesión cerrada exitosamente.",
      // Sidebar
      Books: "Libros",
      Reading: "Leyendo",
      WantToRead: "Por leer",
      Profile: "Perfil",
      Diary: "Diario",
      Reviews: "Reviews",
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
      // Book Search
      SearchBooks: "Buscar libros",
      TypeSearchQuery: "Escriba la consulta de búsqueda",
      SearchEmpty: "La búsqueda no puede estar vacía.",
      FailedSearchQuery: "Algo salió mal en la búsqueda.",
      Pages: "Páginas",
      NoBooksFound: "No se encontraron libros.",
      Previous: "Anterior",
      Next: "Siguiente",
      BookCardError: "Se produjo un error al cargar este libro.",
      ViewMore: "Ver más",
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
