import Error404 from "../pages/errors/Error404";
import Main from "../pages/Main";

export const privateRoutes = [
  
];

export const publicRoutes = [
  
];

export const generalRoutes = [
  {path: "/", component: Main, exact: true},
  {path: "/error/404", component: Error404, exact: true},
];