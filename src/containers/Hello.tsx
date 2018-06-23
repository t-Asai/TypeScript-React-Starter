import Hello from "~/components/Hello";
import { actions } from "~/actions";
import { connect, Dispatch } from "react-redux";

const mapStateToProps = (state: any, props: any) => ({
  enthusiasmLevel: state.hello.enthusiasm,
  name: state.hello.name
});

export const mapDispatchToProps = (dispatch: any) => ({
  onIncrement: () => dispatch(actions.HelloActions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.HelloActions.decrementEnthusiasm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
