import Top from "~/containers/Top";
import Hello from "~/containers/Hello";
import SeeYou from "~/containers/SeeYou";
import NotFound from "~/components/404";

const routes = [
  {
    path: "/",
    name: "top",
    exact: true,
    component: Top
  },
  {
    path: "/hello",
    name: "hello",
    exact: true,
    component: Hello
  },
  {
    path: "/seeyou",
    name: "seeyou",
    exact: true,
    component: SeeYou
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
