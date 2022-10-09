import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageURL, Price, Name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageURL} alt={`${Name}`} />
      <div className="item-details">
        <span className="name">{Name}</span>
        <span className="price">
          {quantity} x ${Price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
