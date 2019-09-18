import React from "react";
import PropTypes from "prop-types";
import Container from "../../../layouts/Container/Container";
import Cell from "../Cell/Cell";
import { StyledGrid } from "./StyledGrid";

const onHover = (colId, rowId) => {
  console.log(colId, rowId);
};

const Grid = ({ grid: { items, columns, rows } }) => (
  <StyledGrid columns={columns.length} className={"grid"}>
    <Container align={"right"}>
      <ul className="grid__top-panel">
        {columns.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </Container>
    <div className="grid__body">
      <ul className="grid__side-panel">
        {rows.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <Container align={"right"} className="grid__items-wrapper">
        <ul className={"grid__items"}>
          {items.map(item => (
            <Cell key={item.id} onHover={onHover} {...item} />
          ))}
        </ul>
      </Container>
    </div>
  </StyledGrid>
);

Grid.propTypes = {
  grid: PropTypes.object.isRequired
};

export default Grid;
