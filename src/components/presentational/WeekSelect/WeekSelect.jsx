import React from "react";
import PropTypes from "prop-types";
import Select from "../../common/Select/Select";
import Container from "../../../layouts/Container/Container";
import { StyledWeekSelect } from "./StyledWeekSelect";

const WeekSelect = ({ options }) => (
  <StyledWeekSelect>
    <Container mode="sm">
      <Select options={options} />
    </Container>
  </StyledWeekSelect>
);

WeekSelect.propTypes = { options: PropTypes.array.isRequired };

export default WeekSelect;
