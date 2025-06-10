import App from "@/App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import BookContextComponent from "@/context/BookContextComponent";
import UserContextComponent from "@/context/UserContextComponent";
import "@/i18n";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <UserContextComponent>
          <BookContextComponent>
            <App />
          </BookContextComponent>
        </UserContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
