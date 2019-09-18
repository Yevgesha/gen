import { connect } from "react-redux";
import {
  headInfoHeadlineSelector,
  headInfoParagraphSelector
} from "../../../redux/selectors/index";
import HeadInfo from "../../presentational/HeadInfo/HeadInfo";

const mapStateToProps = state => ({
  headline: headInfoHeadlineSelector(state),
  paragraph: headInfoParagraphSelector(state)
});

export default connect(mapStateToProps)(HeadInfo);
