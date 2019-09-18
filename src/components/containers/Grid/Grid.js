import { connect } from "react-redux";
import { gridSelector } from "../../../redux/selectors/gridSelector";
import Grid from "../../presentational/Grid/Grid";

const mapStateToProps = state => ({
  grid: gridSelector(state)
});

export default connect(mapStateToProps)(Grid);
