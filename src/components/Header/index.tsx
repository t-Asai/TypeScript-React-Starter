import * as React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = ({ isOpen, changeMenuIsOpen }: any) => (
  <Dropdown isOpen={isOpen} toggle={changeMenuIsOpen}>
    <DropdownToggle>Dropdown</DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Header</DropdownItem>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

export default Header;
