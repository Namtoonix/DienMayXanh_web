import React from 'react';
import './TopBtn.scss';

TopBtn.propTypes = {};

function TopBtn(props) {
  return (
    <a href="#carouselExampleControls" className="top-btn">
      <i class="fa fa-angle-up" aria-hidden="true"></i>
    </a>
  );
}

export default TopBtn;
