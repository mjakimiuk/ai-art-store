import { ReactComponent as ScrollUpIcon } from "../../assets/icons/scroll-up.icon.svg";
import "./scroll.up.styles.scss";
const scrollUpComponent = () => {
  const scrollUpHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="scrollUpContainer" onClick={scrollUpHandler}>
      <ScrollUpIcon className="scrollUpIcon" />
    </div>
  );
};

export default scrollUpComponent;
