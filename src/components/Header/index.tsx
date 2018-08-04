import * as React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import routes from "~/routes";

const Header = ({ isOpen, changeMenuIsOpen }: any): any => {
  const item = routes.map(route => {
    if (route.name !== undefined) {
      return (
        <li key={route.path}>
          <DropdownItem>
            <Link to={route.path}>{route.name}</Link>
          </DropdownItem>
        </li>
      );
    } else {
      return null;
    }
  });
  return (
    <Dropdown isOpen={isOpen} toggle={changeMenuIsOpen}>
      <DropdownToggle>Links</DropdownToggle>
      <DropdownMenu>{item}</DropdownMenu>
    </Dropdown>
  );
};

export default Header;
