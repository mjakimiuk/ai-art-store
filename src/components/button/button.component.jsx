import "./button.style.scss";

export const BUTTON_TYPE = {
  base: "base-button",
  google: "google-signIn",
};

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default ButtonComponent;
