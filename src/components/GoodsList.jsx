import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem addToBasket={addToBasket} key={item.id} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
