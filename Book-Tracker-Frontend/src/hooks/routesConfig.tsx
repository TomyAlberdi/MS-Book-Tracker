import Home from "@/app/Pages/Home";
import NotFound from "@/app/Pages/NotFound";

export const routesConfig = [
  {
    path: "*",
    element: <NotFound />,
  },
  { index: true, element: <Home /> },
];
