import * as React from "react";
import { Link } from "react-router-dom";
import {
  StyleLinkList,
  StyleSideBar,
  StyleComposedComponent,
  StyleComposedComponentBuff
} from "./StyleSideBar";
import routes from "~/routes";

const SideBar = (): any => {
  const listItems = routes.map(route => {
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

  return <StyleLinkList>{listItems}</StyleLinkList>;
};

export const ConnectSideBar = (ComposedComponent: any) =>
  class extends React.Component {
    render() {
      return (
        <div>
          <StyleSideBar>
            <SideBar />
          </StyleSideBar>
          <StyleComposedComponentBuff>
            <StyleComposedComponent>
              <ComposedComponent {...this.props} {...this.state} />
            </StyleComposedComponent>
          </StyleComposedComponentBuff>
        </div>
      );
    }
  };
