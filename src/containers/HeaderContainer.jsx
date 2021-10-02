import productApi from 'api/productApi';
import NavBar from 'components/Header/NavBar/NavBar';
import NavSale from 'components/Header/NavSale/NavSale';
import SliderHeader from 'components/Header/SliderHeader/SliderHeader';
import TopBtn from 'components/Header/TopBtn/TopBtn';
import { updateProductData } from 'features/Products/ProductSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {};
      const products = await productApi.getAll(params);
      const actions = updateProductData(products);
      dispatch(actions);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <SliderHeader />
      <NavBar products={products} />
      <NavSale />
      <TopBtn />
    </div>
  );
}

export default HeaderContainer;
