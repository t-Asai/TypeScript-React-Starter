import * as React from "react";
import { Link } from "react-router-dom";
import Header from "~/containers/Header";
import routes from "~/routes";
import {
  StyleLinkList,
  StyleSideBar,
  StyleSideBarBuff,
  StyleComposedComponent,
  StyleComposedComponentBuff
} from "./StyleSideBar";
import { HedderBuff } from "./Header";

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

export const EmbedToLayout = (ComposedComponent: any) =>
  class extends React.Component {
    render() {
      return (
        <div>
          <HedderBuff>
            <Header />
          </HedderBuff>
          <StyleSideBarBuff>
            <StyleSideBar>
              <SideBar />
            </StyleSideBar>
          </StyleSideBarBuff>
          <StyleComposedComponentBuff>
            <StyleComposedComponent>
              <ComposedComponent {...this.props} {...this.state} />
            </StyleComposedComponent>
          </StyleComposedComponentBuff>
        </div>
      );
    }
  };
