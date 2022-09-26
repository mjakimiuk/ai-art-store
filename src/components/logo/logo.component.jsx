import { Fragment } from "react";
import "../logo/logo.styles.scss";

const Logo = () => {
  const logoText = "AI:ART";
  return (
    <Fragment>
      <div className="containerLogo">
        <div className="glitch" data-text={logoText}>
          {logoText}
        </div>
      </div>
    </Fragment>
  );
};

export default Logo;
