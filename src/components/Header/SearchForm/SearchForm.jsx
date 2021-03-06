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

    const newKeySearch = handleRemoveSign(keySearch);
    const newKeySearchNoSign = newKeySearch.split(' ').join('-').toLowerCase();

    return products.map((productList) => {
      const newKeyProduct = handleRemoveSign(productList.type);
      const newKeyProductNoSign = newKeyProduct.split(' ').join('-').toLowerCase();

      if (newKeyProductNoSign === newKeySearchNoSign) {
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
                {(Math.floor((product.price * (100 - product.sale)) / 100 / 10000) * 10000).toLocaleString()}??
              </p>
              <p className="old-price">{product.price.toLocaleString()}??</p>
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

  const handleRemoveSign = (str) => {
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
    str = str.replace(/??|??|???|???|??/g, 'i');
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
    str = str.replace(/???|??|???|???|???/g, 'y');
    str = str.replace(/??/g, 'd');
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A');
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E');
    str = str.replace(/??|??|???|???|??/g, 'I');
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O');
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U');
    str = str.replace(/???|??|???|???|???/g, 'Y');
    str = str.replace(/??/g, 'D');
    return str;
  };

  return (
    <form className="form-container">
      <input
        value={keySearch}
        type="text"
        onChange={handleOnchangeKeySearch}
        className="form-control search-form"
        placeholder="B???n t??m g??..."
        aria-label="Search"
      />
      <div className={'container-search ' + (isTyping ? '' : 'hidden')}>
        {handleShowProductSearching(keySearch, products)}
      </div>
    </form>
  );
}

export default SearchForm;
