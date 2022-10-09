import "./card.styles.scss";

const CardComponet = ({ category }) => {
  const { Name, imageURL } = category;
  return (
    <div className="container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="container-text-description">
        <div>
          <h2>{Name}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponet;
