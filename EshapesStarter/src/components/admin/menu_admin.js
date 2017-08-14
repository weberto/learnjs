import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuCommon from '../common/menu_common';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

          // <span style={{"marginRight": "10px"}} className="glyphicon glyphicon-menu-hamburger"></span>
          // <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152" />
            // <li className="list-group-item"><Link to="/settings" className="btn"><span className="glyphicon glyphicon-cog"></span></Link></li>

export default class MenuAdmin extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700} transitionAppear={true} transitionAppearTimeout={3700} >
        <div className="well menu">
          <h3 className="text-center" key="12345">Admin Menus</h3>
          <ul className="list-group" key="12346">
            <MenuCommon></MenuCommon>
            <li className="list-group-item">
              <Link to="/transactionlog" className="btn">
                Transaction Log
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/tools" className="btn">
                <i className="fa fa-wrench" aria-hidden="true"></i>
                Tools
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/contact" className="btn">
                Single Contact
              </Link>
            </li>
            <li className="list-group-item"><Link to="/listcontacts" className="btn">List Contacts</Link></li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
