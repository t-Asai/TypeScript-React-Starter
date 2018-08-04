import * as React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import _routes from "~/routes";

interface Props {
  routes: any;
  name?: string;
}

interface State {
  isOpen: boolean;
}

class CommentBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  changeMenuIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  items = () => (
    <Dropdown
      isOpen={this.state.isOpen}
      toggle={this.changeMenuIsOpen}
      // direction="right"
      style={{ display: "inline-block" }}
    >
      <DropdownToggle style={{ background: "rgb(0, 0, 0)" }}>
        {this.props.name !== undefined
          ? this.props.name
          : this.props.routes[0].name}
      </DropdownToggle>
      <DropdownMenu>{this.item(this.props.routes)}</DropdownMenu>
    </Dropdown>
  );

  item = (routes: any) =>
    routes.map((route: any) => {
      if (route.name === undefined) {
        return null;
      } else {
        return (
          <DropdownItem>
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          </DropdownItem>
        );
      }
    });

  render(): React.ReactElement<any> {
    const nextTarget = this.props.routes.find(
      (route: any) =>
        route.child !== undefined &&
        window.location.pathname.match(route.path) !== null
    );

    if (nextTarget !== undefined) {
      return (
        <div style={{ display: "inline-block" }}>
          {this.items()}
          <CommentBox routes={nextTarget.child} name={nextTarget.name} />
        </div>
      );
    } else {
      return <div style={{ display: "inline-block" }}>{this.items()}</div>;
    }
  }
}

const Header = ({ routes = _routes }: any): React.ReactElement<any> => (
  <CommentBox routes={routes} />
);

export default Header;
