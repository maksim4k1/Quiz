import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";

const privateRoutes = [
  {path: "/profile", element: <Profile/>, exact: true},
  {path: "/profile/edit", element: <EditProfile/>, exact: true},
];

export default privateRoutes;