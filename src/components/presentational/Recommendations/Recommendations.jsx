import React from "react";
import PropTypes from "prop-types";
import Headline from "../../common/Headline/Headline";
import { StyledRecommendations } from "./StyledRecommendations";

const Recommendations = ({ recommendations: { headline, intro, items } }) => (
  <StyledRecommendations>
    <Headline className={"recommendations__headline"}>{headline}</Headline>
    <p className={"recommendations__intro"}>{intro}</p>
    <ul className={"recommendations__list"}>
      {items.map(({ id, icon, text }) => (
        <li key={id} className={"recommendations__item"}>
          <span className={"recommendations__icon"} />
          <p className={"recommendations__text"}>{text}</p>
        </li>
      ))}
    </ul>
  </StyledRecommendations>
);

Recommendations.propTypes = {
  recommendations: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    )
  }).isRequired
};

export default Recommendations;
