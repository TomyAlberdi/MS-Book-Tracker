import Page from "@/app/dashboard/page";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import { routesConfig } from "@/hooks/routesConfig";
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
