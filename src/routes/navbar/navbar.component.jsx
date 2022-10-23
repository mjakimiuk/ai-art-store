import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
} from "../../features/user/userSlice.feature";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/logo/logo.component";
import ShoppingCartIconComponent from "../../components/shopping-cart-icon/shopping-cart-icon.component";
import CartDropdownMenu from "../../components/cart-dropdown-menu/cart-dropdown-menu.component";
import ShopDropdownMenu from "../../components/shop-dropdown-menu/shop-dropdown-menu.component";
import Footer from "../../components/footer/footer.component";
import ScrollUpComponent from "../../components/scroll-up.component/scroll.up.component";
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
  //Mouse hover event handler
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Fragment>
      <nav className="NavContainer">
        <Link to="/">
          <Logo />
        </Link>

        <div className="NavLinksContainer">
          <div
            className="NavLink Shop"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Link to="/shop">Shop</Link>
            {isHovering && <ShopDropdownMenu />}
          </div>
          {!user ? (
            <Link className="NavLink" to="/auth">
              Sign-in
            </Link>
          ) : (
            <Fragment>
              <Link className="NavLink" to="/profile">
                Profile
              </Link>
              <span className="NavLink" onClick={logoutofApp}>
                Sign-out
              </span>
            </Fragment>
          )}
          <ShoppingCartIconComponent />
          {cartVisible && <CartDropdownMenu />}
        </div>
        <ScrollUpComponent />
      </nav>

      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navbar;
