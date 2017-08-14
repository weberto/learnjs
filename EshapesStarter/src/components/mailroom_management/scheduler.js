import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';



class Scheduler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="jumbotronx">
        <h3 className="text-center">Scheduler</h3>
         <DatePicker selected={this.state.date} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Scheduler;
