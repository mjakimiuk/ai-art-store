import CatalogItemComponent from "../catalog-item/catalog-item.component";
import "./catalog.styles.scss";
const MainCategories = [
  {
    ID: 1,
    Name: "Album covers",
    imageURL:
      "https://i.ibb.co/GpyckJs/eagles-of-death-metal-992a0f30-9452-41d1-9254-ab5091e2fcbb-1.png",
    route: "shop/album%20covers",
  },
  {
    ID: 2,
    Name: "Tom Cruise parody",
    imageURL:
      "https://i.ibb.co/yYZ2qLj/tom-cruise-manically-laughing-surrounded-by-a-grou-1acf75cd-d52a-482d-85e8-6d1d5e84ea8b.png",
    route: "shop/tom%20cruise%20parody",
  },
  {
    ID: 3,
    Name: "Cyberpunk cities",
    imageURL:
      "https://i.ibb.co/Qfw5HMt/Venice-as-cyberpunk-city-during-daytime-d7888e89-b639-458d-810d-b935d71b5159.png",
    route: "shop/cyberpunk%20cities",
  },
  {
    ID: 4,
    Name: "Stanislaw Szukalski style",
    imageURL:
      "https://i.ibb.co/TL4S8cL/gods-fighting-humans-Stanislaw-Szukalski-art-style-dc0d6f58-80fe-47f8-ac8e-2e887a27dd7b.png",
    route: "shop/stanislaw%20szukalski%20style",
  },
  {
    ID: 5,
    Name: "Batman Re-Imagined",
    imageURL:
      "https://i.ibb.co/SvsQ2qC/batman-seeing-his-reflection-as-joker-9f28487b-803c-461f-b984-8452a8479a68.png",
    route: "shop/batman%20re-imagined",
  },
  {
    ID: 6,
    Name: "Vampires",
    imageURL:
      "https://i.ibb.co/68krfJ4/vampires-dancing-over-the-bonfire-night-time-full-6440b0d0-538f-45db-bf33-71705d35b0a3.png",
    route: "shop/vampires",
  },
];
const Catalog = () => {
  return (
    <div className="catalog-container">
      {MainCategories.map((category) => (
        <CatalogItemComponent key={category.ID} category={category} />
      ))}
    </div>
  );
};

export default Catalog;
