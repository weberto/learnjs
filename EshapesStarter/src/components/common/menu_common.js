import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEshapes } from '../../actions';

class MenuCommon extends Component {
  render() {
    let login = null;
    let logout = null;
    if (! this.props.eshapes.login)
          login = <li className="list-group-item"><Link to="/login" className="btn">Login</Link></li>
    if (this.props.eshapes.login)
        logout = <li className="list-group-item"><Link to="/logout" className="btn">Logout</Link></li>

    return (
      <div>
        {/*
        <span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger"></span>
        <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
        */}
        {login}
        {logout}
        <li className="list-group-item"><Link to="/home" className="btn">Home</Link></li>
        {/* <li className="list-group-item"><Link to="/setup" className="btn">Setup</Link></li>
        */}
        {/*
        <li className="list-group-item"><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {setEshapes})(MenuCommon);
