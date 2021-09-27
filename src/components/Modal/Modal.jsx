import React from 'react';
import './Modal.scss';

Modal.propTypes = {};

function Modal(props) {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chọn địa chỉ nhận hàng
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              Do ảnh hưởng của dịch, một số tỉnh/thành tạm ngưng phục vụ tại siêu thị, chỉ kinh doanh online.{' '}
              <a href="##" className="see-list">
                Xem danh sách
              </a>
            </div>
            <select className="form-select mt-3 p-3" aria-label="Default select example">
              <option value="0">Hồ Chí Minh</option>
              <option value="1">Hà Nội</option>
              <option value="2">Đà Nẵng</option>
              <option value="3">Cần Thơ</option>
            </select>
            <div className="pt-3">
              <p>
                Thành phố: <strong>Thủ Đức (gồm Q2, Q9, Q.TĐ)</strong>
              </p>
              <p>
                Phường: <strong>Phước Long A</strong>
              </p>
              <a href="##" className="see-list">
                Chọn địa chỉ khác
              </a>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-confirm">
              XÁC NHẬN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
