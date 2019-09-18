import { connect } from "react-redux";
import {
  formHeadlineSelector,
  formFieldSelector,
  formButtonSelector
} from "../../../redux/selectors/index";
import Form from "../../presentational/Form/Form";

const mapStateToProps = state => ({
  headline: formHeadlineSelector(state),
  field: formFieldSelector(state),
  button: formButtonSelector(state)
});

export default connect(mapStateToProps)(Form);
