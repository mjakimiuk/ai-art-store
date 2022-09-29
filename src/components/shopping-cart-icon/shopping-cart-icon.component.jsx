import { ReactComponent as ShoppingCartIcon } from "../../assets/icons/shopping-cart.icon.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleCartVisible } from "../../features/cart/cartSlice.feature";
import "./shopping-cart-icon.style.scss";

const ShoppingCartIconComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleCartVisible());
  }, [dispatch]);

  return (
    <div
      className="shoppingCartContainer "
      onClick={() => dispatch(toggleCartVisible())}
    >
      <div className="shoppingCartItemsNumber">55</div>
      <ShoppingCartIcon className="shoppingCartIcon" />
    </div>
  );
};

export default ShoppingCartIconComponent;
