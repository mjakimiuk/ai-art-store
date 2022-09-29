import ButtonComponent from "../button/button.component";
import "./cart-dropdown-menu.style.scss";

const CartDropdownMenu = () => {
  // const { cartItems } = useContext(CartContext);
  // const navigate = useNavigate();
  const checkoutHandler = () => {
    // navigate("/checkout");
    console.log("clicked");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <span className="empty-message">Your cart is empty</span>
      </div>
      <ButtonComponent onClick={checkoutHandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </div>
  );
};

export default CartDropdownMenu;
