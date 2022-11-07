import SignIn from "../../components/user.sign-in/user.sign-in.component";
import SignUp from "../../components/user.sign-up/user.sign-up.component";
import "./authentication.styles.scss";
const AuthenticateUser = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthenticateUser;
