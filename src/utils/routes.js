import Error404 from "../pages/errors/Error404";
import Main from "../pages/Main";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const privateRoutes = [
  
];

export const publicRoutes = [
  {path: "/signin", element: <SignIn/>, exact: true},
  {path: "/signup", element: <SignUp/>, exact: true},
];

export const generalRoutes = [
  {path: "/", element: <Main/>, exact: true},
  {path: "/error/404", element: <Error404/>, exact: true},
];