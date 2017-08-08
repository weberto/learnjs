import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../../actions';
import _ from 'lodash';
      // <li className="list-group-item">{contacts.Email.EmailAddress}</li>
//       <li className="list-group-item">{contacts.EmplId}</li>
  //     <li className="list-group-item">{contacts.EmpComment}</li>

class FetchContact extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(`component did mount: ${id}`);
    this.props.fetchContact(id);
  }
  renderContact() {
    if (this.props.contact.Cell) {
      let count = 111;
      let t = this.props.contact;
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

  render() {
    console.log(this.props.contact);
    return (
      <div>
        <h3>JSON Fetch Contact</h3>
        <ul className="list-group">
          {this.renderContact()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { contact: state.contact }
}


export default connect(mapStateToProps, {fetchContact})(FetchContact);
// export default connect()(FetchContacts);
