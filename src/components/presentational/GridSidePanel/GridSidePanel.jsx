import React from "react";
import PropTypes from "prop-types";
import {
  StyledGridSidePanel,
  StyledGridSidePanelItem
} from "./StyledGridSidePanel";

const GridSidePanelItem = ({ text, isHighlighted }) => (
  <StyledGridSidePanelItem isHighlighted={isHighlighted}>
    {text}
  </StyledGridSidePanelItem>
);

const GridSidePanel = ({ items, direction, className }) => (
  <StyledGridSidePanel
    className={className}
    cols={direction !== "column" ? items.length : undefined}
  >
    {items.map(item => (
      <GridSidePanelItem key={item.id} {...item} />
    ))}
  </StyledGridSidePanel>
);

GridSidePanel.propTypes = {
  items: PropTypes.array,
  direction: PropTypes.string,
  className: PropTypes.string
};

GridSidePanel.defaultProps = {
  direction: "",
  className: ""
};

export default GridSidePanel;
