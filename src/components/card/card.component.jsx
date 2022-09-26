import "./card.styles.scss";

const CardComponet = ({ category }) => {
  const { name, imageUrl } = category;
  return (
    <div className="container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="container-text-description">
        <div>
          <h2>{name}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponet;
