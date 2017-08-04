import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCommon from '../common/menu_common';


export default class Menus extends Component {
  render() {
    return (
      <div className="well">
        {/*
        <span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger"></span>
        <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
        */}
        <h3 className="text-center">Management Menus</h3>
        <ul className="list-group">
        <MenuCommon></MenuCommon>
        <li className="list-group-item"><Link to="/scheduler" className="btn">Scheduler</Link></li>
        <li className="list-group-item"><Link to="/activitylog" className="btn">Activity Log</Link></li>
        <li className="list-group-item"><Link to="/announcementedit" className="btn">Announcement Edit</Link></li>
        {/*
        <li className="list-group-item"><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>
        */}
      </ul>
      </div>
    );
  }
}
