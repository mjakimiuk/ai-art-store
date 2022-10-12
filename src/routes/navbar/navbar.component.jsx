import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
} from "../../features/user/userSlice.feature";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/logo/logo.component";
import ShoppingCartIconComponent from "../../components/shopping-cart-icon/shopping-cart-icon.component";
import CartDropdownMenu from "../../components/cart-dropdown-menu/cart-dropdown-menu.component";
import Footer from "../../components/footer/footer.component";
import { signOutFireBaseUser } from "../../utils/firebase/firebase.utils";
import "./navbar.styles.scss";
const Navbar = () => {
  const { cartVisible } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const logoutofApp = () => {
    dispatch(logout());
    signOutFireBaseUser();
  };
  return (
    <Fragment>
      <nav className="NavContainer">
        <Link to="/">
          <Logo />
        </Link>

        <div className="NavLinksContainer">
          <Link className="NavLink" to="/shop">
            Shop
          </Link>
          {!user ? (
            <Link className="NavLink" to="/auth">
              Sign-in
            </Link>
          ) : (
            <span className="NavLink" onClick={logoutofApp}>
              Sign-out
            </span>
          )}
          <ShoppingCartIconComponent />
          {cartVisible && <CartDropdownMenu />}
        </div>
      </nav>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navbar;
