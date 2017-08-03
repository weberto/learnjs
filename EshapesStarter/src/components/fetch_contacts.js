import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import _ from 'lodash';
      // <li className="list-group-item">{contacts.Email.EmailAddress}</li>
//       <li className="list-group-item">{contacts.EmplId}</li>
  //     <li className="list-group-item">{contacts.EmpComment}</li>

class FetchContacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  renderContacts() {
    if (this.props.contacts.Cell) {
      let count = 111;
      let t = this.props.contacts;
      let x = [
        {"key": "Cell Number", "value": t.Cell.CellNumber},
        {"key": "Email Address", "value": t.Email.EmailAddress},
        {"key": "Employee ID: ", "value": t.EmplId},
        {"key": "Comment", "value": t.EmpComment}
      ]
      return (
          _.map(x, function(y) {
            count++;
            return (
              <li className="list-group-item" key={count}>
                {y.key}: {y.value}
              </li>
            )
          })
      )
    }
  }

  renderContacts2() {
    if (this.props.contacts.Cell)
      return (
        <div>
          <li className="list-group-item" key={this.props.contacts.Cell.CellNumber}>{this.props.contacts.Cell.CellNumber}</li>
          <li className="list-group-item" key={this.props.contacts.Email.EmailAddress}>{this.props.contacts.Cell.CellNumber}</li>
          <li className="list-group-item" key={this.props.contacts.EmplId}>{this.props.contacts.Cell.CellNumber}</li>
        </div>
      )
    else
      return (
        <li className="list-group-item">Test123</li>
      )
  }
  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <h3>Contacts</h3>
        <ul className="list-group">
          {this.renderContacts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { contacts: state.contacts }
}


export default connect(mapStateToProps, {fetchContacts})(FetchContacts);
// export default connect()(FetchContacts);


