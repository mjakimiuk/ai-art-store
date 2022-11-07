import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./shop-dropdown-menu.styles.scss";

const ShopDropdownMenu = () => {
  const { categoriesValue } = useSelector((state) => state.categories);
  const itemList = Object.keys(categoriesValue);
  return (
    <Fragment>
      <ul className="shop-dropdown-menu-container">
        {itemList.map((item) => (
          <li key={item} className="shop-dropdown-menu-item">
            <Link to={`shop/${item}`}>{item.toLocaleUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ShopDropdownMenu;
