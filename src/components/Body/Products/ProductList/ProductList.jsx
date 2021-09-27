import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import NextArrow from 'components/NextArrow/NextArrow';
import PrevArrow from 'components/PrevArrow/PrevArrow';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  idSlide: PropTypes.number.isRequired,
};

function ProductList(props) {
  const { products, type, idSlide } = props;

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleShowType = (type, products) => {
    if (!type || !products) return;
    return products.map((product, index) =>
      type.map((item, index) => {
        if (product.type !== item) return;
        return (
          <button
            key={index}
            type="button"
            data-bs-target={'#carouselExampleCaptions' + idSlide}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current="true"
            aria-label={'Slide ' + (index + 1)}
          >
            {item}
          </button>
        );
      })
    );
  };

  const handleShowProduct = (products, item) => {
    if (!products) return;
    return products.map((product, index) => {
      if (product.type === item) {
        return product.list.map((item, index) => <ProductItem key={index} product={item} />);
      }
    });
  };

  var executed = false;
  return products.map((product, index) => {
    return type.map((item) => {
      if (product.type === item && !executed) {
        executed = true;
        console.log(executed);
        return (
          <div
            id={'carouselExampleCaptions' + idSlide}
            className="product-slider2 carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <div className="carousel-indicators">{handleShowType(type, products)}</div>
            <div className="carousel-inner">
              {type.map((item, index) => (
                <div key={index} className={'carousel-item ' + (index === 0 ? 'active' : '')}>
                  <Slider {...settings}>{handleShowProduct(products, item)}</Slider>
                </div>
              ))}
            </div>
          </div>
        );
      }
    });
  });
}
export default ProductList;
