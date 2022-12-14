import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../features/user/userSlice.feature";
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";
import { getUserInfo } from "../../utils/firebase/firebase.utils";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.icon.svg";
import ProfileModal from "../../components/profile-modal/profile-modal.component";
import "./user-profile.styles.scss";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  const profileFields = ["Name", "Email", "Password", "Phone", "Address"];
  const profileData = {
    Name: user.displayName,
    Email: user.email,
    Password: "********",
    Phone: "1234567890",
    Address: "1234 Main St, New York, NY 10001",
  };
  // Profile Modal
  const [nameModal, setNameModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const showModal = (field) => {
    switch (field) {
      case "Name":
        setNameModal((prev) => !prev);
        break;
      case "Email":
        setEmailModal((prev) => !prev);
        break;
      case "Password":
        setPasswordModal((prev) => !prev);
        break;
      case "Phone":
        setPhoneModal((prev) => !prev);
        break;
      case "Address":
        setAddressModal((prev) => !prev);
        break;
      default:
        setNameModal((prev) => !prev);
    }
  };

  return (
    <div className="profile-container">
      <h1> User profile</h1>
      {nameModal && (
        <ProfileModal modalType={"name"} onClose={() => setNameModal(false)} />
      )}
      {emailModal && (
        <ProfileModal
          modalType={"email"}
          onClose={() => setEmailModal(false)}
        />
      )}
      {passwordModal && (
        <ProfileModal
          modalType={"password"}
          onClose={() => setPasswordModal(false)}
        />
      )}
      {phoneModal && (
        <ProfileModal
          modalType={"phone"}
          onClose={() => setPhoneModal(false)}
        />
      )}
      {addressModal && (
        <ProfileModal
          modalType={"address"}
          onClose={() => setAddressModal(false)}
        />
      )}

      <ul className="profile-data">
        {profileFields.map((field) => (
          <li key={field + " field"}>
            {field}: <b>{profileData[field]}</b>
            <EditIcon
              className="edit-icon"
              onClick={() => {
                showModal(field);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
