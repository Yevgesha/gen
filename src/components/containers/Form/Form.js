import { connect } from "react-redux";
import { formSelector } from "../../../redux/selectors/index";
import Form from "../../presentational/Form/Form";

const mapStateToProps = state => ({
  data: formSelector(state)
});

export default connect(mapStateToProps)(Form);
