import { connect } from "react-redux";
import { recommendationsSelector } from "../../../redux/selectors/index";
import Recommendations from "../../presentational/Recommendations/Recommendations";

const mapStateToProps = state => ({
  recommendations: recommendationsSelector(state)
});

export default connect(mapStateToProps)(Recommendations);
