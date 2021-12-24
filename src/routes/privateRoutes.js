import CreateQuiz from "../pages/CreateQuiz";
import EditProfile from "../pages/EditProfile";
import Game from "../pages/Game";
import GameResult from "../pages/GameResult";
import MyQuiz from "../pages/MyQuiz";
import MyQuizzes from "../pages/MyQuizzes";
import Profile from "../pages/Profile";

const privateRoutes = [
  {path: "/profile", element: <Profile/>, exact: true},
  {path: "/profile/edit", element: <EditProfile/>, exact: true},
  {path: "/myquizzes", element: <MyQuizzes/>, exact: true},
  {path: "/myquiz/:id", element: <MyQuiz/>, exact: true},
  {path: "/game/:id", element: <Game/>, exact: true},
  {path: "/game/result", element: <GameResult/>, exact: true},
  {path: "/myquizzes/create", element: <CreateQuiz/>, exact: true},
];

export default privateRoutes;