import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Top from "~/components/Top";
import UserActions, { UserActionsType } from "~/actions/User";

const mapStateToProps = (state: any) => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = (
  dispatch: any // Dispatch<UserActionsType>
) => bindActionCreators({ ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
