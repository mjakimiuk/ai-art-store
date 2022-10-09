import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice.feature";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreview = () => {
  const dispatch = useDispatch();
  const { categoriesValue } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
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
