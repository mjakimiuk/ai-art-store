import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentStripeForm from "../../components/payment-stripe-form/payment-stripe-form.component";
import EmptyCart from "../../components/empty-cart/empty-cart";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.ID} cartItem={cartItem} />;
      })}
      {cartItems.length === 0 ? (
        <div>
          <br></br>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <EmptyCart />
      )}
      <span className="total">Total: ${cartTotal}</span>
      Use dummy number:
      <ul>
        <li>Card: 4242 4242 4242 4242</li>
        <li>MM/YY: 04/42 </li>
        <li>CVC: 424 </li>
        <li>Postal code: 24242</li>
      </ul>
      <PaymentStripeForm />
    </div>
  );
};

export default Checkout;
