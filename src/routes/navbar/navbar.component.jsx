import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../components/logo/logo.component";
import "./navbar.styles.scss";
const Navbar = () => {
  return (
    <Fragment>
      <div className="NavContainer">
        <Link to="/">
          <Logo />
        </Link>
        <div className="NavLinksContainer">
          <Link className="NavLink" to="/shop">
            Shop
          </Link>
          <Link className="NavLink" to="/sign-in">
            Sign-in
          </Link>
          <div>Cart Icon</div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
