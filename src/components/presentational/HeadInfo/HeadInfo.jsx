import React from "react";
import PropTypes from "prop-types";
import Headline from "../../common/Headline/Headline";
import Container from "../../../layouts/Container/Container";
import { StyledHeadInfo } from "./StyledHeadInfo";

const HeadInfo = ({ headline, paragraph }) => (
  <StyledHeadInfo>
    <Container mode="md">
      <Headline as="h1">{headline}</Headline>
      <p dangerouslySetInnerHTML={{ __html: paragraph }} />
    </Container>
  </StyledHeadInfo>
);

HeadInfo.propTypes = {
  headline: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
};

export default HeadInfo;
