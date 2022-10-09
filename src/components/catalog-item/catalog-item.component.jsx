import { useNavigate } from "react-router-dom";
import "./catalog-item.styles.scss";

const CatalogItemComponent = ({ category }) => {
  const { Name, imageURL, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <div className="container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="container-text-description">
        <div>
          <h2>{Name}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemComponent;
