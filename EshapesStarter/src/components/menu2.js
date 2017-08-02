import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Menus extends Component {
  render() {
    return (
      <div className="well">
        {/*
        <span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger"></span>
        <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
        */}
        <h3 className="text-center">Manager Menus</h3>
        <ul className="list-group">
        <li className="list-group-item"><Link to="/schedule" className="btn">Schedule</Link></li>
        <li className="list-group-item"><Link to="/availability" className="btn">Availability</Link></li>
        <li className="list-group-item"><Link to="/contacts" className="btn">Contacts</Link></li>
        {/*
        <li className="list-group-item"><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>
        */}
      </ul>
      </div>
    );
  }
}
