import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "~/components/Header";
import MenuActions, { MenuActionsType } from "~/actions/Menu";

const mapStateToProps = (state: any) => ({
  isOpen: state.menu.isOpen
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ ...MenuActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
