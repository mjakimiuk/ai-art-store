import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import { updateAdress } from "../../utils/firebase/firebase.utils";
import "../../components/profile-form/profile-form.styles.scss";
const AddressProfileForm = () => {
  const [address, setAddress] = useState("");
  const [confirmAddress, setConfirmAddress] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (address !== confirmAddress) {
      alert("username don't match");
      return;
    }
    updateAdress(address);
    alert("Address updated");
  };
  return (
    <div>
      <div>Update address</div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Address"
          required
          onChange={(event) => setAddress(event.target.value)}
          type="text"
          name="Address"
          value={address}
        />
        <FormInput
          label="Confirm Address"
          required
          onChange={(event) => setConfirmAddress(event.target.value)}
          type="text"
          name="Address"
          value={confirmAddress}
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

export default AddressProfileForm;
