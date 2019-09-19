import React from "react";
import PropTypes from "prop-types";
import { StyledGridCell } from "./StyledGridCell";

const GridCell = ({
  rowId,
  colId,
  content,
  hoverOn,
  hoverOut,
  isHighlighted
}) => (
  <StyledGridCell
    onMouseEnter={() => hoverOn(colId, rowId)}
    onMouseLeave={hoverOut}
    hasContent={!!content}
    isHighlighted={isHighlighted}
    className={"cell"}
  >
    {content && (
      <>
        {content.image && (
          <div
            className={"cell__bg"}
            style={{ backgroundImage: `url(${content.image})` }}
          />
        )}
        {content.text && <div className={"cell__inner"}>{content.text}</div>}
      </>
    )}
  </StyledGridCell>
);

GridCell.propTypes = {
  rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  colId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.object,
  hoverOn: PropTypes.func.isRequired,
  hoverOut: PropTypes.func.isRequired,
  isHighlighted: PropTypes.bool
};

GridCell.defaultProps = {
  content: null,
  isHighlighted: false
};

export default React.memo(GridCell);
