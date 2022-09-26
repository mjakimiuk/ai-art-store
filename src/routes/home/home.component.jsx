import Catalog from "../../components/catalog/catalog.component";

const Home = () => {
  const testCategories = [
    {
      id: 1,
      name: "Eagles of Death Metal",
      imageUrl:
        "https://i.ibb.co/GpyckJs/dirtywizzard-eagles-of-death-metal-992a0f30-9452-41d1-9254-ab5091e2fcbb-1.png",
    },
    {
      id: 2,
      name: "Egyptian Gods",
      imageUrl:
        "https://i.ibb.co/B4xBrLj/dirtywizzard-egyptian-gods-Stanisaw-Szukalski-painting-style-de-78f46770-1e93-4588-b401-a158a3531a85.png",
    },
    {
      id: 3,
      name: "Jealousy",
      imageUrl:
        "https://i.ibb.co/61Ndx1k/dirtywizzard-Jealousy-in-Edvard-munch-style-6e156d0c-3576-4272-94cc-1c4777836afc.png",
    },
    {
      id: 4,
      name: "Vampire Warriors",
      imageUrl:
        "https://i.ibb.co/k3QW8XN/dirtywizzard-mighty-warrior-vampires-over-the-bonfire-Stanisaw-b7c2ce06-6bb8-42c1-bf35-cc12816a8b9e.png",
    },
    {
      id: 5,
      name: "Red Dragon",
      imageUrl:
        "https://i.ibb.co/PrjdMn7/dirtywizzard-red-dragon-Stanisaw-Szukalski-style-91269231-61e8-4e35-8243-4b53538a9d5e.png",
    },
    {
      id: 6,
      name: "Red Dragon",
      imageUrl:
        "https://i.ibb.co/PrjdMn7/dirtywizzard-red-dragon-Stanisaw-Szukalski-style-91269231-61e8-4e35-8243-4b53538a9d5e.png",
    },
  ];
  return <Catalog categories={testCategories} />;
};

export default Home;
