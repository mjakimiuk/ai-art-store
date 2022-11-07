import { Fragment } from "react";
import "../logo/logo.styles.scss";

const Logo = () => {
  const logoText = "AI:ART";
  return (
    <Fragment>
      <header className="containerLogo">
        <div className="glitch" data-text={logoText}>
          {logoText}
        </div>
      </header>
    </Fragment>
  );
};

export default Logo;
