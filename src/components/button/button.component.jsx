import "./button.style.scss";

const ButtonComponent = ({ children, ...otherProps }) => {
  return (
    <div className="button" {...otherProps}>
      {children}
    </div>
  );
};

export default ButtonComponent;
