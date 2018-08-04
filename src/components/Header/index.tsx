import * as React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import _routes from "~/routes";

const items = (
  routes: any,
  isOpen = false,
  changeMenuIsOpen: any,
  name: string
) => (
  <Dropdown
    isOpen={isOpen}
    toggle={changeMenuIsOpen}
    // direction="right"
    style={{ display: "inline-block" }}
  >
    <DropdownToggle style={{ background: "rgb(0, 0, 0)" }}>
      {name}
    </DropdownToggle>
    <DropdownMenu>{item(routes)}</DropdownMenu>
  </Dropdown>
);

const item = (routes: any) =>
  routes.map((route: any) => {
    if (route.name === undefined) {
      return null;
    } else {
      return (
        <DropdownItem>
          <li key={`${route.path}`}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        </DropdownItem>
      );
    }
  });

const Header = ({
  routes = _routes,
  isOpen,
  changeMainMenuIsOpen,
  changeSubMenuIsOpen
}: any): any => {
  const target = routes.find(
    (route: any) =>
      route.child !== undefined &&
      window.location.pathname.match(route.path) !== null
  );

  return (
    <div>
      {items(routes, isOpen.main, changeMainMenuIsOpen, "Main")}
      {target === undefined
        ? null
        : items(target.child, isOpen.sub, changeSubMenuIsOpen, target.name)}
    </div>
  );
};

export default Header;
