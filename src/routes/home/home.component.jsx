import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice.feature";
import Catalog from "../../components/catalog/catalog.component";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <Catalog />
    </div>
  );
};

export default Home;
