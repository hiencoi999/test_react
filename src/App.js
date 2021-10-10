/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './App.css';
import AddForm from './Components/AddForm';
import ListSV from './Components/ListSV';
import SearchSort from './Components/SearchSort';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      students : [],
      isDisplayAddFrom : false
    }
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem('students')) {
      var students = JSON.parse(localStorage.getItem('students'));
      this.setState({
        students : students
      })
    }
  }



  randomId() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.randomId() + this.randomId() + '-'+ this.randomId();
  }

  onToggleAddForm = () => {
    this.setState({
      isDisplayAddFrom : !this.state.isDisplayAddFrom
    })
  }

  onCloseAddFrom = () => {
    this.setState({
      isDisplayAddFrom : false
    })
  }

  onSubmit = (data) => {
    var {students} = this.state; 
    data.id = this.generateId();
    students.push(data);
    this.setState({
      students : students
    });
    localStorage.setItem('students', JSON.stringify(students));

    //console.log(data);  
  }

  findIndex = (id) => {
    var {students} = this.state;
    var result = -1;
    students.forEach((student, index) => {
      if(student.id === id) result = index
    });
    return result;
  }

  onDelete = (id) => {
    var {students} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      students.splice(index, 1);
      this.setState({
        students : students
      });
      localStorage.setItem('students', JSON.stringify(students));
    }
    this.onCloseAddFrom();
  }

  render() {
      var {students, isDisplayAddFrom} = this.state;
      var elmAddForm = isDisplayAddFrom ?  <AddForm onSubmit={this.onSubmit} onCloseAddForm= {this.onCloseAddFrom}/> : '';

      return (
        <div className="Container">
          <div className="text_center">
            <h1>Quản lý sinh viên</h1>
          </div>
          <div className="row">
            <div className={isDisplayAddFrom ? "col-xs-3 col-sm-3 col-md-3 col-lg-3" :''}>
              {elmAddForm}
            </div>
            
            <div className={isDisplayAddFrom ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-11 col-sm-11 col-md-11 col-lg-11'}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleAddForm}>
                <span className="fa fa-plus"></span>Thêm sinh viên
              </button>
                <SearchSort />
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ListSV student={students} onDelete={this.onDelete}/>
                  </div>
                </div> 
            </div>
            
          </div>
        </div>
      );
    }
}

export default App;
