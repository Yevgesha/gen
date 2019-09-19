import { connect } from "react-redux";
import { downloadsSelectSelector } from "../../../redux/selectors/index";
import Downloads from "../../presentational/Downloads/Downloads";

const mapStateToProps = state => ({
  downloads: downloadsSelectSelector(state)
});

export default connect(mapStateToProps)(Downloads);
