import { useState } from "react";
import { updatePasswordProfileFirebase } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import "../../components/profile-form/profile-form.styles.scss";
const PasswordProfileForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("username don't match");
      return;
    }
    updatePasswordProfileFirebase(password);
    alert("Password updated");
  };
  return (
    <div>
      <div>Update password</div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Password"
          required
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="Password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)}
          type="password"
          name="Password"
          value={confirmPassword}
        />
        <div className="profile-form-button">
          <ButtonComponent buttonType="shop-button" type="submit">
            Update
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default PasswordProfileForm;
