import SearchForm from 'components/Header/SearchForm/SearchForm';
import Suggestion from 'components/Header/Suggestion/Suggestion';
import Modal from 'components/Modal/Modal';
import React from 'react';
import './NavBar.scss';

NavBar.propTypes = {};

function NavBar(props) {
  return (
    <nav className="navHeader navbar navbar-expand-lg navbar-light">
      <div className="navbar-center">
        <a href="##" className="navbar-brand">
          <img
            alt=""
            src="https://cdn.tgdd.vn/Files/2011/06/10/40705/lo-go-dienmayxanh.png"
            style={{ width: 140 + 'px' }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a href="##" className="nav-link active" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span>Xem giá, tồn kho tại:</span> <br />
              P.Phước Long A,...
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <Modal />
            <a href="##" className="nav-link">
              <SearchForm />
            </a>
            <a href="##" className="nav-link cart-btn btn me-3">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Giỏ Hàng
            </a>
            <Suggestion />
          </li>
          <li className="nav-item">
            <a href="##" className="nav-link">
              Lịch sử <br />
              đơn hàng
            </a>
          </li>
          <li className="nav-item row">
            <div className="col-auto position-relative ms-2">
              <div className="dot-gold"></div>
              <div className="dot-animation"></div>
            </div>
            <span className="nav-link col-auto color-gold">
              Vinaphone <strong>TẶNG 20%</strong> giá trị thẻ <br /> nạp - 24/09
            </span>
          </li>
          <li className="nav-item">
            <a href="##" className="nav-link">
              Tư vấn <br />
              chọn mua
            </a>
          </li>
          <li className="nav-item">
            <a href="##" className="nav-link">
              Khuyến mãi
            </a>
          </li>
          <li className="nav-item">
            <a href="##" className="nav-link">
              Vào bếp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
