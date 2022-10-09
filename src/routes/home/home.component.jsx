import Catalog from "../../components/catalog/catalog.component";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Catalog />
      <Outlet />
    </div>
  );
};

export default Home;
