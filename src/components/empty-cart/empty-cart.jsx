import { ReactComponent as ThrashIcon } from "../../assets/icons/thrash.icon.svg";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice.feature";
import "./empty-cart.styles.scss";
const EmptyCart = () => {
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div className="emptyCartContainer">
      <ThrashIcon className="thrashIcon" onClick={clearCartHandler} />
    </div>
  );
};

export default EmptyCart;
