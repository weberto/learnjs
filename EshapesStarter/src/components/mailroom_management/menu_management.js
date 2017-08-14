import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCommon from '../common/menu_common';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class MenuManagement extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700} transitionAppear={true} transitionAppearTimeout={3700} >
        <div className="well menu">
          <h3 className="text-center">Management Menus</h3>
          <ul className="list-group">
            <MenuCommon></MenuCommon>
            <li className="list-group-item">
              <Link to="/scheduler" className="btn">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                Scheduler
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/activitylog" className="btn">
                <i className="fa fa-soccer-ball-o" aria-hidden="true"></i>
                Activity Log
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/announcementedit" className="btn">
                <i className="fa fa-bullhorn" aria-hidden="true"></i>
                Announcement Edit
              </Link>
            </li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>

    );
  }
}
