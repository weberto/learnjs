import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default top-nav">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="#">
                <img id="NYTLogo" alt="New York Times" src="https://static01.nyt.com/images/misc/nytlogo152x23.gif" height="23" width="152">
                </img>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a className="logo-color">e-Shape</a></li>

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                    Employee
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" data-panel="employee/login">Login</a></li>
                    <li><a href="#" data-panel="employee/home">Home</a></li>
                    <li><a href="#" data-panel="employee/contact_information">Contact Information</a></li>
                    <li><a href="#" data-panel="employee/schedule">Schedule</a></li>
                    <li><a href="#" data-panel="employee/availability">Availability</a></li>
                  </ul>
                </li>


                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">
                    Mailroom Management
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" data-panel="mailroom_management/login">Login</a></li>
                    <li><a href="#" data-panel="mailroom_management/home">Home</a></li>
                    <li><a href="#" data-panel="mailroom_management/schedule">Schedule</a></li>
                    <li><a href="#" data-panel="mailroom_management/edit_announcement">Edit Announcement</a></li>
                    <li><a href="#" data-panel="mailroom_management/view_activity">View Activity</a></li>
                    <li><a href="#" data-panel="mailroom_management/email_notifications">E-Mail Notifications</a></li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}
