import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {

      }
    };
  }

  componentDidMount() {
    // Why do we return this?
    return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(results => {
      this.setState({ studentInfo: results.data })
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="box">
        {/* I couldn't figure out how to get it back to the students list but I was able to get it to go back to the classlist. I will continue trying... */}
        <Link to='/'><button className='back-btn'>Go Back</button></Link>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>{this.state.studentInfo.grade}</h3>
        <h3>{this.state.studentInfo.email}</h3>
      </div>
    )
  }
}