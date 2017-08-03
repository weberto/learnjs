import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEshapes } from '../actions';

// export default class Footer extends Component {
class Footer extends Component {
  componentDidMount() {
    this.props.setEshapes();
  }
  render() {
    return (
      <div className="container" style={{position: "fixed", bottom: 0, background: "#eeffee"}}>
        <p className="">
          FOOTER: This is a common footer for eshapes - authority_level, still learning - <strong><em>{this.props.eshapes.authority_level}</em></strong>
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
