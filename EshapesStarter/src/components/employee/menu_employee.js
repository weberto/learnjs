import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCommon from '../common/menu_common';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class MenuEmployee extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700} transitionAppear={true} transitionAppearTimeout={3700} >
      <div className="well menu">
          <h3 className="text-center">Employee Menus</h3>
          <ul className="list-group">
            <MenuCommon></MenuCommon>
            <li className="list-group-item"><Link to="/schedule" className="btn">ScheduleEmployee</Link></li>
            <li className="list-group-item"><Link to="/availability" className="btn">AvailabilityEmployee</Link></li>
            <li className="list-group-item"><Link to="/messages" className="btn">Messages</Link></li>
        </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
