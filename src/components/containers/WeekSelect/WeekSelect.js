import { connect } from "react-redux";
import { weekSelectSelector } from "../../../redux/selectors/index";
import WeekSelect from "../../presentational/WeekSelect/WeekSelect";

const mapStateToProps = state => ({
  options: weekSelectSelector(state)
});

export default connect(mapStateToProps)(WeekSelect);
