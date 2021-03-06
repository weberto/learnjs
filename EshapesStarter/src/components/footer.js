import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEshapes } from '../actions';

// export default class Footer extends Component {
class Footer extends Component {
  componentWillMount() {
  // componentDidMount() {
    this.props.setEshapes();
  }
  render() {
    console.log(`Eshapes: ${JSON.stringify(this.props.eshapes)}`);
    return (
      <div className="container" style={{position: "fixed", marginLeft: "-20px", width: "102%", bottom: 0, background: "white"}}>
      {/* <div className="container" style={{position: "fixed", marginLeft: "-20px", width: "102%", bottom: 0, background: "#eeffee", "background-image": "linear-gradient(90deg, #3bafda, #48cfad)"}}>
        */}
        <p className="">
          FOOTER: Hello EShapes user: {this.props.eshapes.username}. Your authority_level: <strong><em>{this.props.eshapes.authority_level}</em></strong>. login
          status: <strong><em>{JSON.stringify(this.props.eshapes.login)}</em></strong>
        </p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  // console.log(`Footer: ${JSON.stringify(state)}`);
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {setEshapes})(Footer);
