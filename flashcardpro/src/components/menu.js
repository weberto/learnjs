import React, { Component } from 'react';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

export default class Menu extends Component {
  render () {
    return (
      <ButtonToolbar>
        <DropdownButton bsStyle="default" title="FlashCard Pro" noCaret id="dropdown-no-caret">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    )
  }
}
