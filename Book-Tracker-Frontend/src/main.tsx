import App from "@/App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
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
          <App />
        </UserContextComponent>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
