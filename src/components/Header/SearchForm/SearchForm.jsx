import React, { useRef, useState } from 'react';
import './SearchForm.scss';
import PropTypes from 'prop-types';
import { onAddToCart } from 'features/Cart/CartSlice';
import { useDispatch } from 'react-redux';

SearchForm.propTypes = {
  products: PropTypes.array.isRequired,
};

function SearchForm(props) {
  const { products } = props;
  const dispatch = useDispatch();

  const [isTyping, setIsTyping] = useState(false);
  const [keySearch, setKeySearch] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleOnchangeKeySearch = (e) => {
    const value = e.target.value;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      if (value) {
        setIsTyping(true);
      } else {
        setIsTyping(false);
      }
    }, 500);

    setKeySearch(value);
  };

  const handleAddCart = (product, quantity) => {
    const data = {
      product: product,
      quantity: quantity,
    };
    const actions = onAddToCart(data);
    dispatch(actions);

    setIsTyping(false);
  };

  const handleShowProductSearching = (keySearch, products) => {
    if (!keySearch || !products) return;

    return products.map((productList) => {
      if (productList.type.toLowerCase() === keySearch) {
        return productList.list.map((product, index) => (
          <div key={index} className="search-item row">
            <div className="item-left">
              <img src={product.image} alt="" />
            </div>
            <div className="item-center">
              <h6>{product.name}</h6>
              <p>{product.gift}</p>
            </div>
            <div className="item-right">
              <p className="new-price">
                {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * 10000).toLocaleString()}đ
              </p>
              <p className="old-price">{product.price.toLocaleString()}đ</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddCart(product, 1);
                }}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        ));
      } else {
        return null;
      }
    });
  };
  return (
    <form className="form-container">
      <input
        value={keySearch}
        type="text"
        onChange={handleOnchangeKeySearch}
        className="form-control search-form"
        placeholder="Bạn tìm gì..."
        aria-label="Search"
      />
      <div className={'container-search ' + (isTyping ? '' : 'hidden')}>
        {handleShowProductSearching(keySearch, products)}
      </div>
    </form>
  );
}

export default SearchForm;
