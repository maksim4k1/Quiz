import EditProfile from "../pages/EditProfile";
import Game from "../pages/Game";
import Profile from "../pages/Profile";

const privateRoutes = [
  {path: "/profile", element: <Profile/>, exact: true},
  {path: "/profile/edit", element: <EditProfile/>, exact: true},
  {path: "/quiz/game/:id", element: <Game/>, exact: true},
];

export default privateRoutes;