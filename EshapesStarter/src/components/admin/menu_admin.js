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
      <div className="well fadein">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700} transitionAppear={true} transitionAppearTimeout={500}>
          <h3 className="text-center" key="12345">Admin Menus</h3>
          <ul className="list-group" key="12346">
            <MenuCommon></MenuCommon>
            <li className="list-group-item"><Link to="/transactionlog" className="btn">Transaction Log</Link></li>
            <li className="list-group-item"><Link to="/tools" className="btn">Tools</Link></li>
          </ul>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
