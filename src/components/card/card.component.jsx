import { useState } from "react";
import ButtonComponent from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  cartValueUpdate,
} from "../../features/cart/cartSlice.feature";
import Rating from "@mui/material/Rating";
import {
  setScoreFirebase,
  getScoreFirebase,
} from "../../utils/firebase/firebase.utils";
import "./card.styles.scss";

const CardComponet = ({ category }) => {
  const { Name, imageURL, Price } = category;
  const { user } = useSelector((state) => state.user);
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

  // Score rating
  const [valueScore, setValueScore] = useState(0);
  getScoreFirebase(category.ID).then((res) => setValueScore(res));

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
          {user ? (
            <Rating
              sx={{ color: "black" }}
              name="simple-controlled"
              value={Number(valueScore)}
              precision={0.5}
              onChange={(event, newValue) => {
                setValueScore(setScoreFirebase(category.ID, newValue));
              }}
            />
          ) : (
            <Rating
              sx={{ color: "black" }}
              name="read-only"
              value={valueScore}
              precision={0.5}
              readOnly
            />
          )}
        </div>
        <ButtonComponent buttonType="shop-button" onClick={cartHandler}>
          Add to Cart
        </ButtonComponent>
      </div>
    </div>
  );
};

export default CardComponet;
