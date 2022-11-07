import { Fragment, useEffect, useState } from "react";
import CardComponet from "../card/card.component";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesValue } = useSelector((state) => state.categories);
  const [products, setProduts] = useState(categoriesValue[category]);

  useEffect(() => {
    setProduts(categoriesValue[category]);
  }, [category, categoriesValue]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <CardComponet
              key={product.ID}
              category={product}
              averageScore={product["Average score"]}
            />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
