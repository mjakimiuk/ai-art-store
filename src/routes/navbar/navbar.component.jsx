import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../components/logo/logo.component";
import ShoppingCartIconComponent from "../../components/shopping-cart-icon/shopping-cart-icon.component";
import CartDropdownMenu from "../../components/cart-dropdown-menu/cart-dropdown-menu.component";
import "./navbar.styles.scss";
const Navbar = () => {
  const { cartVisible } = useSelector((store) => store.cart);

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
          <ShoppingCartIconComponent />
          {cartVisible && <CartDropdownMenu />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
