import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import Hello from "~/components/Hello";
import HelloActions, { HelloActionsType } from "~/actions/Hello";
import UserActions, { UserActionsType } from "~/actions/User";

const mapStateToProps = (state: any) => ({
  // ここanyなのは気にくわないが、typeの結合の仕方が思いつかなかったので、保留
  enthusiasm: state.hello.enthusiasm,
  name: state.user.name
});

const mapDispatchToProps = (
  dispatch: Dispatch<HelloActionsType | UserActionsType>
) => bindActionCreators({ ...HelloActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
