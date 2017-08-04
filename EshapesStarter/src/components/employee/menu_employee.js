import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCommon from '../common/menu_common';


export default class MenuEmployee extends Component {
  render() {
    return (
      <div className="well">
        {/*
        <span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger"></span>
        <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
        */}
        <h3 className="text-center">Employee Menus</h3>
        <ul className="list-group">
        <MenuCommon></MenuCommon>
        <li className="list-group-item"><Link to="/schedule" className="btn">ScheduleEmployee</Link></li>
        <li className="list-group-item"><Link to="/availability" className="btn">AvailabilityEmployee</Link></li>
        <li className="list-group-item"><Link to="/messages" className="btn">Messages</Link></li>
        {/* <li className="list-group-item"><Link to="/contacts" className="btn">ContactsEmployee</Link></li>
        */}
        {/*
        <li className="list-group-item"><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>
        */}
      </ul>
      </div>
    );
  }
}
