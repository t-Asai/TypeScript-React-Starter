import * as React from "react";
import Top from "~/containers/Top";
import Hello from "~/containers/Hello";
import SeeYou from "~/containers/SeeYou";

const NotFound = () => (
  <div>
    <h1>Sorry, can’t find that.</h1>
  </div>
);

const routes = [
  {
    path: "/",
    name: "top",
    exact: true,
    sidebar: () => <div>home!</div>,
    component: Top
  },
  {
    path: "/hello",
    name: "hello",
    exact: true,
    sidebar: () => <div>home!</div>,
    component: Hello
  },
  {
    path: "/seeyou",
    name: "seeyou",
    exact: true,
    sidebar: () => <div>home!</div>,
    component: SeeYou
  },
  {
    path: "*",
    sidebar: () => <div>home!</div>,
    component: NotFound
  }
];

export default routes;
