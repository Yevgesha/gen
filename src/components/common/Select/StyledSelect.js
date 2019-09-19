import styled from "styled-components";

export const customStyles = {
  indicatorSeparator: () => ({
    display: "none"
  }),
  placeholder: () => ({
    display: "none"
  }),
  control: () => ({
    position: "relative",
    border: "none",
    zIndex: 1
  }),
  valueContainer: (provided, state) => ({
    borderRadius: "13px",
    boxShadow: state.selectProps.menuIsOpen
      ? "0px 0px 20px rgba(0, 0, 0, 0.3)"
      : "0px 0px 20px rgba(0, 0, 0, 0.15)",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 40px",
    background: "#fff",
    transition: ".2s",
    "&:hover": {
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
    }
  }),
  singleValue: provided => ({
    ...provided,
    position: "static",
    transform: "none"
  }),
  menu: () => ({
    position: "absolute",
    overflow: "hidden",
    top: "100%",
    left: 0,
    right: 0,
    margin: "-4px 4px 0",
    borderRadius: "0 0 13px 13px",
    background: "#fff",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)"
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: "212px",
    padding: "12px 0 0",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
      display: "none"
    }
  }),
  option: (provided, state) => ({
    ...provided,
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: state.isFocused ? "#BDF3E6" : "inherit",
    color: state.isSelected ? "inherit" : "inherit"
  })
};

export const StyledSelect = styled.div`
  position: relative;
  z-index: 1;

  .select__icon,
  .select__icon--active {
    position: absolute;
    top: 0;
    right: 16px;
    bottom: 0px;
    margin: auto;
    width: 19px;
    height: 8px;
  }

  .select__icon--active {
    transform: scale(-1);
  }
`;
