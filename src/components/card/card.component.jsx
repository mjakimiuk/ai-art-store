import ButtonComponent from "../button/button.component";
import { useDispatch } from "react-redux";
import {
  addItem,
  cartValueUpdate,
} from "../../features/cart/cartSlice.feature";
import "./card.styles.scss";

const CardComponet = ({ category }) => {
  const { Name, imageURL, Price } = category;
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addItem(category));
  };
  const cartValueUpdateHandler = () => {
    dispatch(cartValueUpdate());
  };
  const cartHandler = () => {
    addItemHandler();
    cartValueUpdateHandler();
  };
  return (
    <div className="container">
      <div
        className="background-image"
        alt={`${Name}`}
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="container-text-description">
        <div>
          <h2>{Name}</h2>
          <p>Price ${Price}</p>
        </div>
        <ButtonComponent buttonType="shop-button" onClick={cartHandler}>
          Add to Cart
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CardComponet;
