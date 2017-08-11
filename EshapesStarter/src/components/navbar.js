import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEshapes } from '../actions';


// export default class Menu extends Component {
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    alert('test');
  }
      // <div style={{marginTop: "10px", textAlign: "center", borderBottom: "1px solid black"}}>
  render() {
    let setup = null;
    if (this.props.eshapes.login)
      setup = <Link to="/setup" className="btn"><span className="glyphicon glyphicon-cog"></span></Link>

    return (
      <div style={{marginTop: "10px", marginBottom: "10px", textAlign: "center", background: "white"}}>
        <Link to="/menu"><span style={{"marginRight": "10px", "display": "inline"}} className="glyphicon glyphicon-menu-hamburger"></span></Link>

        {/*
        <Link to="/menu_management"><span style={{"marginRight": "10px", "display": "inline"}} className="glyphicon glyphicon-menu-hamburger"></span></Link>
        <Link to="/menu_employee"><span style={{"marginRight": "10px", "display": "inline"}} className="glyphicon glyphicon-user"></span></Link>
        <Link to="/menu_admin"><span style={{"marginRight": "10px", "display": "inline"}} className="glyphicon glyphicon-font"></span></Link>
        */}
        {/**
        <Link to="/menus"><span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger" onClick={this.handleClick}></span></Link>
        */}
        <img style={{"margin": "0 30px 0 30px"}} id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
        {setup}
        {/* <Link to="/setup" className="btn"><span className="glyphicon glyphicon-cog"></span></Link> */}
        {/**
        <ul>
        <li><Link to="/schedule" className="btn">Schedule</Link></li>
        <li><Link to="/availability" className="btn">Availability</Link></li>
        <li><Link to="/contacts" className="btn">Contacts</Link></li>
        <li><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>
      </ul>
      */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(`Footer: ${JSON.stringify(state)}`);
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {setEshapes})(Menu);
