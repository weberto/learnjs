import React, { Component } from 'react';
import {Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import './navdropdown.css';
      // {/* <Nav bsStyle="tabs" activeKey="1"> */}

export default class NavDropdownEshape extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: "2"};
    // this.handleSelect = this.handleSelect.bind(this);
  }
  // handleSelect(eventKey) {
  handleSelect = (eventKey) => {
    // event.preventDefault();
    console.log(eventKey);
    this.setState({activeKey: eventKey}, function() {
      console.log(`after set state: ${JSON.stringify(this.state)}`);
    });
    // console.log(`after set state: ${JSON.stringify(this.state)}`);
    // alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
        <NavItem eventKey="1" title="home" href="#">Employee</NavItem>
        <NavItem eventKey="2" title="Item">Manager</NavItem>
        <NavItem eventKey="3" href="#">Admin</NavItem>
        <NavDropdown eventKey="4" title="Additional Actions" id="nav-dropdown">
          <MenuItem eventKey="4.1">Schedule</MenuItem>
          <MenuItem eventKey="4.2">Staff List</MenuItem>
          <MenuItem eventKey="4.3">Openings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Eshape Home</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
};

// ReactDOM.render(<NavDropdownExample />, mountNode);
