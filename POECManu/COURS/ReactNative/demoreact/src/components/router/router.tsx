import { RouteObject, useRoutes } from "react-router";
import HerosDetails from "../pages/HerosDetails";
import HerosList from "../pages/HeroList";
import Forms from "../form/form";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <HerosList />,
    },
    {
      path: "/:id",
      element: <HerosDetails />,
    },
    {
      path: "/form",
      element: <Forms />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;