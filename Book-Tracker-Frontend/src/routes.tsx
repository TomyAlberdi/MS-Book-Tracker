import { Navigate, useRoutes } from "react-router-dom";
import Page from "@/app/dashboard/page";
import { routesConfig } from "@/hooks/routesConfig";
import Register from "@/components/Auth/Register";
import Login from "@/components/Auth/Login";

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
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);
};

export default CustomRouter;
