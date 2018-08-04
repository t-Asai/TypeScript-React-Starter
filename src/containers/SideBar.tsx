import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SideBar from "~/components/SideBar";

const mapStateToProps = (state: any) => ({
  name: state.user.name
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
