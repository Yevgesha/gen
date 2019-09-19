import React, { useState } from "react";
import Input from "../Input/Input";
import { validateEmail } from "../../../helpers/index";

const EmailInput = props => {
  const [state, updState] = useState({ isEmpty: true, isValid: false });
  const { isEmpty, isValid } = state;
  return (
    <Input
      type="email"
      onChange={({ target: { value } }) =>
        updState({
          isEmpty: !value.length,
          isValid: validateEmail(value)
        })
      }
      isEmpty={isEmpty}
      isValid={isValid}
      {...props}
    />
  );
};

export default EmailInput;
