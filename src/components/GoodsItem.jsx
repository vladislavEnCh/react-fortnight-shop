function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img alt="ba" src={full_background} />
        <span>{name}</span>
        {/* <a
          className="btn-floating halfway-fab waves-effect waves-light red"
          href="f"
        /> */}
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
          className="btn">
          BUY
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} грн.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
