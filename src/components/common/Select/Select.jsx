import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import SpriteSVGIcon from "../../common/SpriteSVGIcon/SpriteSVGIcon";
import { StyledSelect, customStyles } from "./StyledSelect";

const CustomSelect = ({ options }) => (
  <StyledSelect>
    <Select
      options={options}
      styles={customStyles}
      isSearchable={false}
      defaultValue={options[0]}
      components={{
        DropdownIndicator: ({ selectProps: { menuIsOpen } }) => (
          <SpriteSVGIcon
            id="toggle-arrow"
            className={`select__icon${menuIsOpen ? "--active" : ""}`}
          />
        )
      }}
    />
  </StyledSelect>
);

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired
};

export default CustomSelect;
