import React from 'react';
import PropTypes from 'prop-types';
import './HotSearch.scss';

HotSearch.propTypes = {
  hotKey: PropTypes.array.isRequired,
};

function HotSearch(props) {
  const { hotKey } = props;

  const handleShowHotKey = (hotKey) => {
    if (!hotKey) return;
    return hotKey.map((key, index) => (
      <li key={index} className="">
        {key}
      </li>
    ));
  };
  return (
    <ul className="hot-search">
      <p>Tìm kiếm nhiều: </p>
      {handleShowHotKey(hotKey)}
    </ul>
  );
}

export default HotSearch;
