import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import { updatePhoneNumber } from "../../utils/firebase/firebase.utils";
import "../../components/profile-form/profile-form.styles.scss";
const PhoneNumberProfileForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (phoneNumber !== confirmPhoneNumber) {
      alert("username don't match");
      return;
    }
    updatePhoneNumber(phoneNumber);
    alert("Number updated");
  };
  return (
    <div>
      <div>Update phone number</div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Phone Number"
          required
          onChange={(event) => setPhoneNumber(event.target.value)}
          type="tel"
          name="PhoneNumber"
          value={phoneNumber}
        />
        <FormInput
          label="Confirm Phone Number"
          required
          onChange={(event) => setConfirmPhoneNumber(event.target.value)}
          type="tel"
          name="PhoneNumber"
          value={confirmPhoneNumber}
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

export default PhoneNumberProfileForm;
