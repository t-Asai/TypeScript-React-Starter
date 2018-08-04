import * as React from "react";
import { Link } from "react-router-dom";
import routes from "~/routes";
import { StyleLinkList } from "./Style";

interface Props {
  name: string;
}

const SideBar = ({ name }: Props): React.ReactElement<string> => {
  const listItems = routes.map((route: any) => {
    if (route.name !== undefined) {
      return (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <StyleLinkList>
      <li>welcome {name}</li>
      {listItems}
    </StyleLinkList>
  );
};

export default SideBar;
