import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { processLogin } from '../../actions';
import { setEshapes } from '../../actions';
import MenuManagement from '../mailroom_management/menu_management';
import MenuEmployee from '../employee/menu_employee';
import MenuAdmin from '../admin/menu_admin';
import MenuCommon from './menu_common';
// import Login from './login';

class Menu extends Component {
  // componentDidMount() {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // this.props.setEshapes();
  }
  render() {
      console.log(`Eshapes: ${JSON.stringify(this.props.eshapes)}`);
    let menu = "";
    switch (this.props.eshapes.authority_level) {
      case 'employee':
        menu = <MenuEmployee />;
        break;
      case 'management':
        menu = <MenuManagement />;
        break;
      case 'admin':
        menu = <MenuAdmin />;
        break;
      default:
        menu = <MenuCommon />;
        // menu = <Login />;
        break;
    }
    return menu;
  }
};

function mapStateToProps(state) {
  // console.log(`Footer: ${JSON.stringify(state)}`);
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {setEshapes})(Menu);
