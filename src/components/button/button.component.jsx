import "./button.style.scss";

export const BUTTON_TYPE = {
  base: "base-button",
  google: "google-signIn",
  shop: "shop-button",
};

const ButtonComponent = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      disabled={isLoading}
      className={
        isLoading ? `button-spinner` : `button-container ${buttonType}`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
