/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import OneRowData from './OneRowData';

class ListSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fillterMsv : '',
      fillterName : '',
      fillterDate : '',
      fillterGender : '',
      fillterMark : '',
      fillterStatus : ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFillter(name, value);
    this.setState({
      [name] : value
    })

  }
  
  render() {
        var students = this.props.student;
        var fillter = this.state;
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
                        <th className='text_center' width='80px'>GPA</th>
                        <th className='text_center' width='120px'>Trạng thái</th>
                        <th className='text_center' width='250px'>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr height='15px'>
                        <td></td>
                        <td>
                          <input type='text' className='form-control' name='fillterMsv' value={fillter.fillterMsv} onChange= {this.onChange} />
                        </td>
                        <td>
                          <input type='text' className='form-control' name='fillterName' onChange= {this.onChange}/>
                        </td>
                        <td></td>
                        <td> 
                          <select className='form-control' name='fillterGender' onChange= {this.onChange}>
                            <option>Select</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </select>
                        </td>
                        <td>
                          <select className='form-control' name='fillterMark' onChange= {this.onChange}>
                            <option value='all'>Tất cả</option>
                            <option value="3.6-4.0">3.6 - 4.0</option>
                            <option value="3.2-3.6">3.2 - 3.6</option>
                            <option value="3.0-3.2">3.0 - 3.2</option>
                            <option value="2.5-3.0">2.5 - 3.0</option>
                            <option value="2.0-2.5">2.0 - 2.5</option>
                            <option value="2.0">&lt; 2.0</option>
                          </select>
                        </td>
                        <td>
                          <select className="form-control" name="fillterStatus" onChange= {this.onChange}>
                            <option>--Select--</option>
                            <option value='Tất cả'>Tất cả</option>
                            <option value='Không'>Không </option>
                            <option value='Nguy cơ nghỉ học'>Nguy cơ nghỉ học</option>
                            <option value='Cảnh báo học vụ'>Cảnh báo học vụ</option>
                            <option value='Thiếu tín chỉ'>Thiếu tín chỉ</option>
                            <option value='Thiếu học phí'>Thiếu học phí</option>
                            <option value='Khen thưởng'>Khen thưởng</option>
                          </select>
                        </td>
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
