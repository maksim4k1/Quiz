import Categories from "../pages/Categories";
import Error404 from "../pages/errors/Error404";
import Main from "../pages/Main";

const generalRoutes = [
  {path: "/", element: <Main/>, exact: true},
  {path: "/categories", element: <Categories/>, exact: true},
  {path: "/error/404", element: <Error404/>, exact: true},
];

export default generalRoutes;