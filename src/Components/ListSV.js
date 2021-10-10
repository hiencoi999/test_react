/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import OneRowData from './OneRowData';

class ListSV extends Component {

    render() {
        var students = this.props.student;
        var studentList = students.map((student, index) => {
            return < OneRowData key={student.id} index ={index} student={student} onDelete={this.props.onDelete} />
        });
        return (
              <div>
                <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className='text_center' width='50px'>STT</th>
                        <th className='text_center' width='100px'>MSV</th>
                        <th className='text_center' width='200px'>Họ và tên</th>
                        <th className='text_center' width='100px'>Ngày sinh</th>
                        <th className='text_center' width='90px'>Giới tính</th>
                        <th className='text_center' width='80px'>Điểm số</th>
                        <th className='text_center' width='120px'>Trạng thái</th>
                        <th className='text_center' width='250px'>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr height='15px'>
                        <td></td>
                        <td>
                          <input type='text' className='form-control' name='MSV' />
                        </td>
                        <td>
                          <input type='text' className='form-control' name='name' />
                        </td>
                        <td></td>
                        <td> </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      {studentList}
                    </tbody>
                </table>
              </div>  
      );
    }
}

export default ListSV;
