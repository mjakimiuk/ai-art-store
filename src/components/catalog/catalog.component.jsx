import CatalogItem from "../catalog-item/catalog-item.component";
import { CatalogContainer } from "./catalog.style.jsx";
import CardComponent from "../card/card.component";
const Catalog = ({ categories }) => {
  return (
    <CatalogContainer>
      {categories.map((category) => (
        <CardComponent key={category.id} category={category} />
      ))}
    </CatalogContainer>
  );
};

export default Catalog;

// import CatalogItem from "../catalog-item/catalog-item.component";
// import { CatalogContainer } from "./catalog.style.jsx";

// const Catalog = ({ categories }) => {
//   return (
//     <CatalogContainer>
//       {categories.map((category) => (
//         <CatalogItem key={category.id} category={category} />
//       ))}
//     </CatalogContainer>
//   );
// };

// export default Catalog;
