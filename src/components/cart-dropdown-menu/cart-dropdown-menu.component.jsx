import ButtonComponent from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import EmptyCart from "../empty-cart/empty-cart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisible } from "../../features/cart/cartSlice.feature";
import { ReactComponent as XmarkIcon } from "../../assets/icons/x-mark.icon.svg";
import "./cart-dropdown-menu.style.scss";

const CartDropdownMenu = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown-container">
      <XmarkIcon
        className="x-mark-icon"
        onClick={() => dispatch(toggleCartVisible())}
      />
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.ID} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        {cartItems.length > 0 && <EmptyCart />}
      </div>
      <ButtonComponent onClick={checkoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </div>
  );
};

export default CartDropdownMenu;
