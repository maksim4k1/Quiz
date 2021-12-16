import AuthError from "../pages/errors/AuthError";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const publicRoutes = [
  {path: "/signin", element: <SignIn/>, exact: true},
  {path: "/signup", element: <SignUp/>, exact: true},
  {path: "/quiz/game/:id", element: <AuthError/>, exact: true},
  {path: "/game/result/", element: <AuthError/>, exact: true},
];

export default publicRoutes;