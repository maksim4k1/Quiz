import AuthError from "../pages/errors/AuthError";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import privateRoutes from "./privateRoutes";

const privatePages = privateRoutes.map((route) => {
  return {...route, element: <AuthError/>};
});

const publicPages = [
  {path: "/signin", element: <SignIn/>, exact: true},
  {path: "/signup", element: <SignUp/>, exact: true},
];

const publicRoutes = [...publicPages, ...privatePages];

export default publicRoutes;