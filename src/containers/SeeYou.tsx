import SeeYou from "~/components/SeeYou";
import * as actions from "~/actions";
import { connect, Dispatch } from "react-redux";

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.EnthusiasmAction>
) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeeYou);
