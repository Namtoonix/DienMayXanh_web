import React from 'react';
import './SearchForm.scss';

SearchForm.propTypes = {};

function SearchForm(props) {
  return (
    <form className="d-flex">
      <input className="form-control search-form" type="search" placeholder="Bạn tìm gì..." aria-label="Search" />
    </form>
  );
}

export default SearchForm;
