import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentStripeForm from "../../components/payment-stripe-form/payment-stripe-form.component";
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
      <span className="total">Total: ${cartTotal}</span>
      <PaymentStripeForm />
    </div>
  );
};

export default Checkout;
