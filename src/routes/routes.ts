import Home from "../pages/Home";
import NotFound from "../components/routes/NotFound";

const routes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: Home
  },
  {
    path: "*",
    name: "page404",
    exact: false,
    component: NotFound
  }
];

export default routes;
