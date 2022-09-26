import {
  BackgroundImage,
  Body,
  CatalogItemContainer,
} from "./catalog-item.style.jsx";

const CatalogItem = ({ category }) => {
  const { name, imageUrl } = category;
  return (
    <CatalogItemContainer>
      <BackgroundImage imageUrl={imageUrl} />

      <Body>
        <h2>{name}</h2>
        <p>Shop now</p>
      </Body>
    </CatalogItemContainer>
  );
};

export default CatalogItem;
