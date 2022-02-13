import PeoplePage from "../containers/PeoplePage/PeoplePage";
import HomePage from "../containers/HomePage/HomePage";
import NotFoundPage from "../containers/NotFoundPage/NotFoundPage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    element: HomePage,
  },
  {
    path: "/people",
    exact: true,
    element: PeoplePage,
  },
  {
    path: "/not-found",
    exact: false,
    element: NotFoundPage,
  },
  {
    path: "*",
    exact: false,
    element: NotFoundPage,
  },
  {
    path: "/people/:id",
    exact: true,
    element: PersonPage,
  },
  {
    path: "/favorites",
    exact: true,
    element: FavoritesPage,
  },
  {
    path: "/search",
    exact: true,
    element: SearchPage,
  },
  {
    path: "/fail",
    exact: true,
    element: ErrorMessage,
  },
];

export default routesConfig;
