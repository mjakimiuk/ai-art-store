import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import ButtonComponent from "../button/button.component";
import "./payment-stripe-form.styles.scss";

const PaymentStripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const [processingPayment, setProcessingPayment] = useState(false);
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });
    setProcessingPayment(false);
    if (paymentResult.error) {
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log("Payment successful");
      }
    }

    console.log(paymentResult);
  };
  return (
    <div className="PaymentFormContainer">
      <form className="FormContainer" onSubmit={paymentHandler}>
        <h2>Card Payment:</h2>
        <CardElement />
        <ButtonComponent isLoading={processingPayment}>
          {processingPayment ? `` : `PAY NOW`}
        </ButtonComponent>
      </form>
    </div>
  );
};

export default PaymentStripeForm;
