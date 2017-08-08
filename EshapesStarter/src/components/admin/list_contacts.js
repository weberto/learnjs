import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listContacts } from '../../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

      // <li className="list-group-item">{contacts.Email.EmailAddress}</li>
//       <li className="list-group-item">{contacts.EmplId}</li>
  //     <li className="list-group-item">{contacts.EmpComment}</li>

class ListContacts extends Component {
  componentDidMount() {
    this.props.listContacts();
  }
  renderContacts() {
      return (
        // _.map(this.props.contacts, function(y) {
        _.map(this.props.contacts.data, function(y) {
          let link = `/contact/${y.EmplID}`;
          return (
            <li className="list-group-item" key={y.EmplID}>
              <Link to={link}>
                {y.EmplID}: {y.email}
              </Link>
            </li>
          )
        })
      )
  }

  render() {
    console.log(`contacts: ${JSON.stringify(this.props.contacts)}`);
    return (
      <div>
        <h3 className="text-center">All Contacts</h3>
        <ul className="list-group">
          {this.renderContacts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(`State Contacts: ${JSON.stringify(state.contacts)}`);
  return { contacts: state.contacts }
}


export default connect(mapStateToProps, {listContacts})(ListContacts);
// export default connect()(FetchContacts);
