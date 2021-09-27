import PropTypes from 'prop-types';
import React from 'react';
import './NavLeft.scss';

NavLeft.propTypes = {
  typeProduct: PropTypes.array.isRequired,
};

function NavLeft(props) {
  const { typeProduct } = props;

  const showProductType = (arr) => {
    return arr.map((item, index) => (
      <a href="##" key={index} className="item">
        {item}
        {index < arr.length - 1 ? ', ' : ''}
      </a>
    ));
  };
  return (
    <table className="col-2 text-start nav-list ps-4 pe-4">
      <tbody>
        {typeProduct.map((type, index) => (
          <tr key={index} className="tr-item">
            <td className={'ps-2 pt-2 pb-2 fa ' + type.icon} aria-hidden="true"></td>
            <td className="name-type">{showProductType(type.title.split(', '))}</td>
            <td className="fa fa-chevron-right" aria-hidden="true"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NavLeft;
