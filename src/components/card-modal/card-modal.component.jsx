import { ReactComponent as CloseImageModalXmarkIcon } from "../../assets/icons/x-mark.icon.svg";
import "../card-modal/card-modal.styles.scss";

const CardModal = (props) => {
  return (
    <div className="image-modal">
      <img
        className="image-postion"
        src={props.imageRoute}
        alt={props.altDecription}
      />
      <CloseImageModalXmarkIcon
        className="x-mark-icon"
        onClick={props.onClose}
      />

      <span className="card-modal">test test</span>
    </div>
  );
};

export default CardModal;
