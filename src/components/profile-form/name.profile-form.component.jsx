import { useState } from "react";
import { updateProfileFirebase } from "../../utils/firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/user/userSlice.feature";
import FormInput from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";
import "../../components/profile-form/profile-form.styles.scss";
const NameProfileForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  const [username, setUsername] = useState("");
  const [confirmUsername, setConfirmUsername] = useState("");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username !== confirmUsername) {
      alert("username don't match");
      return;
    }
    updateProfileFirebase(username);
    dispatch(
      login({
        email: user.email,
        displayName: username,
      })
    );
    alert("Username updated");
  };

  return (
    <div>
      <div>Update email</div>
      <form onSubmit={formSubmitHandler}>
        <FormInput
          label="Username"
          required
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          name="Username"
          value={username}
        />
        <FormInput
          label="Confirm Username"
          required
          onChange={(event) => setConfirmUsername(event.target.value)}
          type="text"
          name="ConfirmUsername"
          value={confirmUsername}
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

export default NameProfileForm;
