import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice.feature";
import { onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";
import { getUserInfo } from "../../utils/firebase/firebase.utils";
import "./user-profile.styles.scss";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user !== null && user.displayName === null) {
        getUserInfo(user.uid).then((user) => {
          dispatch(
            login({
              email: user.email,
              displayName: user.displayName,
            })
          );
        });
      }
    });
  }, [dispatch]);
  return (
    <div className="profile-container">
      <h1> User profile</h1>
      <p>{user.displayName}</p>
    </div>
  );
};

export default UserProfile;
