import * as React from "react";
import Header from "~/components/Header";
import SideBar from "~/containers/SideBar";
import {
  StyleSideBar,
  StyleSideBarBuff,
  StyleComposedComponent,
  StyleComposedComponentBuff,
  StyleHeader,
  StyleHeaderBuff
} from "./StyleLayout";

export const EmbedToLayout = (ComposedComponent: any): React.ComponentClass =>
  class extends React.Component {
    render() {
      return (
        <div>
          <StyleHeaderBuff>
            <StyleHeader>
              <Header />
            </StyleHeader>
          </StyleHeaderBuff>

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
