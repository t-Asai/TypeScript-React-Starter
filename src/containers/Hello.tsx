import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import Hello from "~/components/Hello";
import actions, { EnthusiasmAction } from "~/actions/Hello";
import { HelloState } from "~/types/hello";

const mapStateToProps = (state: HelloState) => ({
  enthusiasm: state.hello.enthusiasm,
  name: state.hello.name
});

const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmAction>) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
