import Error404 from "../pages/errors/Error404";
import Main from "../pages/Main";

export const privateRoutes = [];

export const publicRoutes = [];

export const generalRoutes = [
  {path: "/", element: <Main/>, exact: true},
  {path: "*", element: <Error404/>, exact: true},
];