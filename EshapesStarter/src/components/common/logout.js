import React, { Component } from 'react';
import { setEshapes } from '../../actions';
import { connect } from 'react-redux';
import Login from './login';
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom';
// this.context.router.push(path)



class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let values = {
      "username": '',
      "authority_level": '',
      "login" : false
    }
    this.props.setEshapes(values);
  }
  render() {
    return (
      <div className="col-md-offset-4 col-md-4">
        <h3>Thank You</h3>
        <Link to="/login" className="btn btn-success">Login</Link>
      </div>
    );
  }
}

// export default Logout;
export default connect(null, { setEshapes })(Logout);
