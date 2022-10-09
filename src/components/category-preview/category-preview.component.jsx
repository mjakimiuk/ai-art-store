import { Link } from "react-router-dom";
import CardComponent from "../card/card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <CardComponent key={product.ID} category={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
