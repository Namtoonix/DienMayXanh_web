import NavBar from 'components/Header/NavBar/NavBar';
import NavSale from 'components/Header/NavSale/NavSale';
import SliderHeader from 'components/Header/SliderHeader/SliderHeader';
import React from 'react';

HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  return (
    <div>
      <SliderHeader />
      <NavBar />
      <NavSale />
    </div>
  );
}

export default HeaderContainer;
