import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import Top from "~/components/Top";
import UserActions, { UserActionsType } from "~/actions/User";

const mapStateToProps = (state: any) => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>) =>
  bindActionCreators({ ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
