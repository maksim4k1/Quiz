import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const publicRoutes = [
  {path: "/signin", element: <SignIn/>, exact: true},
  {path: "/signup", element: <SignUp/>, exact: true},
];

export default publicRoutes;