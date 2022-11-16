import { useState } from "react";
import { updateEmailProfileFirebase } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import "../../components/profile-form/profile-form.styles.scss";
const EmailProfileForm = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [confirmEmailAddress, setConfirmEmailAddress] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (emailAddress !== confirmEmailAddress) {
      alert("username don't match");
      return;
    }
    updateEmailProfileFirebase(emailAddress);
  };
  return (
    <div>
      <div>Update name</div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Email Address"
          required
          onChange={(event) => setEmailAddress(event.target.value)}
          type="email"
          name="EmailAddress"
          value={emailAddress}
        />
        <FormInput
          label="Confirm Email Address"
          required
          onChange={(event) => setConfirmEmailAddress(event.target.value)}
          type="email"
          name="EmailAddress"
          value={confirmEmailAddress}
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

export default EmailProfileForm;
