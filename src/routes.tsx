import Top from "~/containers/Top";
import Hello from "~/containers/Hello";
import SeeYou from "~/containers/SeeYou";
import NotFound from "~/components/404";

const routes: any = [
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
    component: Hello,
    child: [
      {
        path: "/hello/1",
        name: "hello",
        exact: true,
        component: Hello
      },
      {
        path: "/hello/2",
        name: "hello",
        exact: true,
        component: Hello,
        child: [
          {
            path: "/hello/2/1",
            name: "hello",
            exact: true,
            component: Hello
          },
          {
            path: "/hello/2/2",
            name: "hello",
            exact: true,
            component: Hello
          }
        ]
      }
    ]
  },
  {
    path: "/seeyou",
    name: "seeyou",
    exact: true,
    component: SeeYou,
    child: [
      {
        path: "/seeyou/1",
        name: "seeyou",
        exact: true,
        component: SeeYou
      },
      {
        path: "/seeyou/2",
        name: "seeyou",
        exact: true,
        component: SeeYou
      }
    ]
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
