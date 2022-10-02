import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import ButtonComponent, { BUTTON_TYPE } from "../button/button.component";

import {
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./user.sign-in.component.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSignInSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;

        case "auth/user-not-found":
          alert("User not found");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignInSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType={BUTTON_TYPE.google}
            onClick={signInWithGoogle}
          ></ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
