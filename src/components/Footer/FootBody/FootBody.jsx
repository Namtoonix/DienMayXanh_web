import React from 'react';
import PropTypes from 'prop-types';
import HotSearch from './HotSearch/HotSearch';
import FootInfo from './FootInfo/FootInfo';

FootBody.propTypes = {
  keyList: PropTypes.array.isRequired,
};

function FootBody(props) {
  const { keyList } = props;
  return (
    <div className="mt-4">
      <HotSearch hotKey={keyList} />
      <img src="https://cdn.tgdd.vn/2021/08/banner/1200x60-1200x60-1-1200x60-1.jpeg" alt="" />
      <FootInfo />
    </div>
  );
}

export default FootBody;
