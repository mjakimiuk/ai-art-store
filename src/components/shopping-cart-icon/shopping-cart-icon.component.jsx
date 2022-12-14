import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisible } from "../../features/cart/cartSlice.feature";
import "./shopping-cart-icon.style.scss";

const ShoppingCartIconComponent = () => {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((store) => store.cart);

  return (
    <div
      className="shoppingCartContainer "
      onClick={() => dispatch(toggleCartVisible())}
    >
      <div className="shoppingCartItemsNumber">{cartCount}</div>
      <ShoppingCartIcon className="shoppingCartIcon" />
    </div>
  );
};

export default ShoppingCartIconComponent;
