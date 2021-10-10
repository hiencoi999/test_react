/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

class SearchSort extends Component {
  
  render() {
      return (
        <div className='row mt-15'>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input name='keyword' type='text' className='form-control' placeholder="Nhập tên sv cần tìm" />
              <span className='input-group-btn'>
                <button type="button" className="btn btn-primary">
                  <span className="fa fa-search mr-4"></span>Tìm kiếm
                </button>
              </span>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className='dropdown'>
            <button type="button" className="btn btn-primary dropdown-toggle"
                    id='dropdownMenu1' data-toggle='dropdown'
                    aria-haspopup='true' aria-expanded='true'>
              Sắp xếp <span className="fa fa-caret-square-o-down ml-5"></span>
            </button>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                <li>
                  <a role='button' className='sort_selected'>
                    <span className='fa fa-sort-alpha-asc pr-5'>Tên A - Z</span>
                  </a>    
                </li>
                <li>
                  <a role='button' className='sort_selected'>
                    <span className='fa fa-sort-alpha-desc pr-5'>Tên Z - A</span>
                  </a>    
                </li>
                <li>
                  <a role='button' className='sort_selected'>
                    <span className='fas fa-angle-double-down '>Điểm số</span>
                  </a>    
                </li>
              </ul>
          </div>
        </div>
        </div>
      );
    }
}

export default SearchSort;
