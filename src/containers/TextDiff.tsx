import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TextDiff from "~/components/TextDiff";
import TextDiffActions, { TextDiffActionsType } from "~/actions/TextDiff";

const mapStateToProps = (state: any) => ({
  // ここanyなのは気にくわないが、typeの結合の仕方が思いつかなかったので、保留
  baseText: state.textDiff.baseText,
  nextText: state.textDiff.nextText
});

const mapDispatchToProps = (
  dispatch: any // DispatchProp<HelloActionsType | UserActionsType>
) => bindActionCreators({ ...TextDiffActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextDiff);
