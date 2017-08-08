import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../actions';
// import { fetchContents } from '../actions';

// export default class Footer extends Component {
class Footer extends Component {
  componentDidMount() {
    this.props.setEshapes();
  }
  render() {
    console.log(`Eshapse: ${JSON.stringify(this.props.eshapes)}`);
    return (
      <div className="container">
        <p className="">
          {JSON.stringify(this.props.payload)}
        </p>
        <p>Second</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  // console.log(`Footer: ${JSON.stringify(state)}`);
  return { eshapes: state.eshapes}
}


export default connect(mapStateToProps, {fetchContact})(Footer);
