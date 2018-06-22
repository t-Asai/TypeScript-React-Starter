import * as React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
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

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export const ConnectSideBar = (ComposedComponent: any) =>
  class extends React.Component {
    render() {
      return (
        <div>
          <SideBar />
          <ComposedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  };
