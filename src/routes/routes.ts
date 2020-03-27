import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = [
  {
    path: "/signup",
    name: "signup",
    exact: true,
    protected: false,
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    exact: true,
    protected: false,
    component: Login
  },
  {
    path: "/",
    name: "home",
    exact: true,
    protected: true,
    component: Home
  },
  {
    path: "*",
    name: "page404",
    exact: false,
    protected: false,
    component: NotFound
  }
];

export default routes;
