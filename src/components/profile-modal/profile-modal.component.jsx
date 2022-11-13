import { ReactComponent as CloseProfileModalXmarkIcon } from "../../assets/icons/x-mark.icon.svg";

import NameProfileForm from "../profile-form/name.profile-form.component";
import EmailProfileForm from "../profile-form/email.profile-form.component";
import PasswordProfileForm from "../profile-form/password.profile-form.component";
import "../profile-modal/profile.styles.scss";

const ProfileModal = (props) => {
  return (
    <div className="">
      <div className="profile-modal-menu">
        {props.modalType === "name" && (
          <div>
            <h1>Profile Name</h1>
            <NameProfileForm />
          </div>
        )}
        {props.modalType === "email" && (
          <div>
            <h1>Profile Email</h1>
            <EmailProfileForm />
          </div>
        )}
        {props.modalType === "password" && (
          <div>
            <h1>Profile Password</h1>
            <PasswordProfileForm />
          </div>
        )}
        <CloseProfileModalXmarkIcon
          className="x-mark-icon"
          onClick={props.onClose}
        />
      </div>
      <div className="profile-modal"></div>
    </div>
  );
};

export default ProfileModal;
