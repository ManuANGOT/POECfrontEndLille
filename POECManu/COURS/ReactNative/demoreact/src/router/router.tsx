import { RouteObject, useRoutes } from "react-router";
import HerosDetails from "../pages/HerosDetails";
import HerosList from "../pages/HeroList";
import Forms from "../components/form/form";
import Get from "../components/Fetch/get";
import GetID from "../components/Fetch/getId";
import HerosEdit from "../pages/herosEdit";

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
    {
      path: "/fetch",
      element: <Get />,
    },
    {
      path: "/fetch/:id",
      element: <GetID />,
    },

    
    {
      path: "/edit/:id",
      element: <HerosEdit />,
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;
