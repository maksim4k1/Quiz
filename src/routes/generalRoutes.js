import Categories from "../pages/Categories";
import Category from "../pages/Category";
import Error404 from "../pages/errors/Error404";
import Main from "../pages/Main";
import Quiz from "../pages/Quiz";
import Rating from "../pages/Rating";
import UserProfile from "../pages/UserProfile";

const generalRoutes = [
  {path: "/", element: <Main/>, exact: true},
  {path: "/categories", element: <Categories/>, exact: true},
  {path: "/category/:id", element: <Category/>, exact: true},
  {path: "/quiz/:id", element: <Quiz/>, exact: true},
  {path: "/error/404", element: <Error404/>, exact: true},
  {path: "/rating", element: <Rating/>, exact: true},
  {path: "/profile/:username", element: <UserProfile/>, exact: true},
];

export default generalRoutes;