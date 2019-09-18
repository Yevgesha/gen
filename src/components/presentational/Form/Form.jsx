import React from "react";
import PropTypes from "prop-types";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import IconButton from "../../common/IconButton/IconButton";
import SpriteSVGIcon from "../../common/SpriteSVGIcon/SpriteSVGIcon";
import Container from "../../../layouts/Container/Container";
import { StyledForm } from "./StyledForm";

const Form = ({ headline, field, button }) => (
  <Container mode="md">
    <StyledForm className={"form"}>
      <div className={"form__headline"}>{headline}</div>
      <Container mode="sm">
        <Input className={"form__field"} {...field} />
        <Button className={"form__button"}>{button.text}</Button>
      </Container>{" "}
      <IconButton className={"form__close"}>
        <SpriteSVGIcon className={"form__close-icon"} id="cross" />
      </IconButton>
    </StyledForm>
  </Container>
);

Form.propTypes = {
  headline: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  button: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Form;
