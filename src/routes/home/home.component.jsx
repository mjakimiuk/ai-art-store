import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../features/categories/categoriesSlice.feature";
import { Outlet } from "react-router-dom";
import Catalog from "../../components/catalog/catalog.component";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div>
      <Catalog />
      <Outlet />
    </div>
  );
};

export default Home;
