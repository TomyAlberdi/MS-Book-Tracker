import Page from "@/app/dashboard/page";
import Login from "@/app/Pages/Auth/Login";
import Register from "@/app/Pages/Auth/Register";
import { routesConfig } from "@/lib/routesConfig";
import { useRoutes } from "react-router-dom";

const CustomRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Page />,
      children: routesConfig,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
};

export default CustomRouter;
