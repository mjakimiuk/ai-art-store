import React, { useState } from "react";
import { ReactComponent as ScrollUpIcon } from "../../assets/icons/scroll-up.icon.svg";
import "./scroll.up.styles.scss";
const ScrollUpComponent = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="scrollUpContainer"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <ScrollUpIcon className="scrollUpIcon" />
    </div>
  );
};

export default ScrollUpComponent;
