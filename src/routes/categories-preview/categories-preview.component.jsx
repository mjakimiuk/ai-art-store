import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const { categoriesValue } = useSelector((state) => state.categories);

  return (
    <Fragment>
      {Object.keys(categoriesValue).map((title) => {
        const products = categoriesValue[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
