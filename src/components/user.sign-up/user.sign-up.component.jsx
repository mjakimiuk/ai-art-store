import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

import "./user.sign-up.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);

  return <div className="sign-up-container">hello</div>;
};

export default SignUpForm;
