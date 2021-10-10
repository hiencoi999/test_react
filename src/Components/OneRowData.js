/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

// function dateTransform(value) {
//   var s = value.toString().split('-');
//   if(s[0] <=31 && s[0] >=1) {return [s[0],s[1],s[2]].join('/');}
//   else return [s[2],s[1],s[0]].join('/');
// } 

class OneRowData extends Component {
  
  dateTransform = (value) => {
    var s = value.toString().split('-');
    if(s[0] <=31 && s[0] >=1) {return [s[0],s[1],s[2]].join('/');}
    else return [s[2],s[1],s[0]].join('/');
  } 

  onDelete = () => {
    this.props.onDelete(this.props.student.id)
  }

  render() {
      var {student, index} = this.props;
      var day = this.dateTransform(student.date);

      return (
            <tr height='30px'>
              <td className='text_center'>{index+1}</td>
              <td className='text_center'>{student.msv}</td>
              <td className='text_center'>{student.name}</td>
              <td className='text_center'> {day}</td>
              <td className='text_center'><span className='fas fa-mars'></span>&nbsp;{student.gender}</td>
              <td className='text_center'>{student.mark}</td>
              <td className='text_center'>{student.status}</td>
              <td className='text_center'>
              <button type='button' className='btn btn-warning'>
                  <span className='fa fa-pencil'></span> &nbsp;Chi tiết, Sửa
              </button> &nbsp;
              <button className='btn btn-danger' type='button' onClick={this.onDelete}>
                  <span className='fa fa-trash'></span> &nbsp;Xóa
              </button> &nbsp;
              </td>
            </tr>
      );
    }
}

export default OneRowData;
