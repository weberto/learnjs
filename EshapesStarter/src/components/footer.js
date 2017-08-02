import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="container" style={{position: "fixed", bottom: 0, background: "#eeffee"}}>
        <p className="">
          FOOTER: The date retrieved from getWeek_Of() is displayed in the Schedule Page (in the example shown, it is 2/19/2017).
        </p>
      </div>
    );
  }
};
