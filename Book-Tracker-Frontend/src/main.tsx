import { StrictMode } from "react";
import App from "@/App.tsx";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router-dom";
import UserContextComponent from "@/context/UserContextComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <UserContextComponent>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContextComponent>
    </ThemeProvider>
  </StrictMode>
);
