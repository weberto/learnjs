import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { processLogin } from '../../actions';
import { setEshapes } from '../../actions';
import MenuManagement from '../mailroom_management/menu_management';
import MenuEmployee from '../employee/menu_employee';
import MenuAdmin from '../admin/menu_admin';

// export default class Footer extends Component {
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
    /**
    return (
      <div><h3>test</h3></div>
    )
    */
    let menu = "";
    switch (this.props.eshapes.authority_level) {
      case 'employee':
        menu = <MenuEmployee />;
        // return <MenuEmployee/>;
        break;
      case 'management':
        menu = <MenuManagement />;
        // return <MenuManagement />;
        break;
      default:
        menu = <MenuAdmin />;
        // return <MenuAdmin />;
        break;
    }
    return menu;
    /**
    return (
      <MenuManagement />
    );
    */
  }
};

function mapStateToProps(state) {
  // console.log(`Footer: ${JSON.stringify(state)}`);
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {setEshapes})(Menu);
