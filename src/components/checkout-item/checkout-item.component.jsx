import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearItem,
  cartValueUpdate,
} from "../../features/cart/cartSlice.feature";
import { getAnalytics, logEvent } from "firebase/analytics";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { Name, imageURL, Price, quantity } = cartItem;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "add_to_cart");
    dispatch(addItem(cartItem));
  };
  const removeItemHandler = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "remove_from_cart");
    dispatch(removeItem(cartItem));
  };
  const clearItemHandler = () => {
    dispatch(clearItem(cartItem));
  };
  const cartValueUpdateHandler = () => {
    dispatch(cartValueUpdate());
  };
  const cartItemAddHandler = () => {
    addItemHandler();
    cartValueUpdateHandler();
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageURL} alt={`${Name}`} />
      </div>
      <span className="name">{Name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={cartItemAddHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{`$${Price}`}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
