import React from "react";
import PropTypes from "prop-types";
import EmailInput from "../../common/EmailInput/EmailInput";
import Button from "../../common/Button/Button";
import IconButton from "../../common/IconButton/IconButton";
import SpriteSVGIcon from "../../common/SpriteSVGIcon/SpriteSVGIcon";
import Container from "../../../layouts/Container/Container";
import { StyledForm } from "./StyledForm";

const Form = ({ data: { headline, field, button } }) => (
  <Container mode="md">
    <StyledForm className={"form"}>
      <div className={"form__headline"}>{headline}</div>
      <Container mode="sm">
        <EmailInput className={"form__field"} {...field} />
        <Button className={"form__button"}>{button.text}</Button>
      </Container>{" "}
      <IconButton className={"form__close"}>
        <SpriteSVGIcon className={"form__close-icon"} id="cross" />
      </IconButton>
    </StyledForm>
  </Container>
);

Form.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    button: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Form;
