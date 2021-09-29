import { onAddToCart } from 'features/Cart/CartSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ProductItem.scss';

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem(props) {
  const { product } = props;
  const showStar = (star) => {
    return (
      <div>
        <i className={'fa ' + (star > 0 ? 'fa-star' : 'fa-star-o')} aria-hidden="true"></i>
        <i className={'fa ' + (star > 1 ? 'fa-star' : 'fa-star-o')} aria-hidden="true"></i>
        <i className={'fa ' + (star > 2 ? 'fa-star' : 'fa-star-o')} aria-hidden="true"></i>
        <i className={'fa ' + (star > 3 ? 'fa-star' : 'fa-star-o')} aria-hidden="true"></i>
        <i className={'fa ' + (star > 4 ? 'fa-star' : 'fa-star-o')} aria-hidden="true"></i>
      </div>
    );
  };
  const handleShowSpecialFeature = (specialFeature) => {
    if (!specialFeature) return;
    return specialFeature.split(', ').map((feature, index) => (
      <button key={index} className="btn special-feature">
        {feature}
      </button>
    ));
  };

  const dispatch = useDispatch();
  const handleAddCart = (product) => {
    const actions = onAddToCart(product);
    dispatch(actions);
  };

  return (
    <div className="product-item">
      <div className="pic-container">
        <img style={{ width: 100 + '%' }} src={product.image} alt="" />
      </div>
      <div className="product-info">
        <img
          alt=""
          src="https://www.vhv.rs/dpng/d/12-122177_sale-tag-vector-png-transparent-png.png"
          className={'logo-sale ' + (product.sale > 0 ? '' : 'hidden')}
        />
        <p className="product-name">{product.name}</p>
        <div className="row">{handleShowSpecialFeature(product.specialFeature)}</div>
        <span className={product.online ? '' : 'hidden'}>Online giá rẻ</span>
        <p className={'old-price ' + (product.sale > 0 ? '' : 'hidden ') + (product.online ? '' : 'line-42')}>
          <span>{product.price.toLocaleString()}đ </span> &nbsp;-{product.sale}%
        </p>
        <p className="new-price">
          {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * 10000).toLocaleString()}đ
        </p>
        <span className="gift">{product.gift}</span>
        <div className="rating">
          <div>{showStar(product.star)}</div>
          <p>{product.evaluateQuanty}</p>
        </div>
        <div className="background-container">
          <button
            onClick={() => handleAddCart(product)}
            className="fa fa-cart-plus buy-btn"
            aria-hidden="true"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
