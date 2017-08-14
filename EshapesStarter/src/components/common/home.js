import React, { Component } from 'react';
import moment from 'moment';

      // <div className="jumbotron" style={{"background": "white"}}>

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({today: moment().format('MM/DD/YYYY')});
    this.setState({now: moment().format('hh:mm A')});
  }
  render() {
    return (
      <div>
        <h3 className="text-center" >Management Message</h3>
        <div className="well">
         <h4 className="text-right">{this.state.today}</h4>
         <p className="text-justify">
There are several motivations for the development of this project. The 2016 Mailroom contract included the addition of Half Day work shifts. This introduced an added variable in the hiring process, since Employees could now specify an early start time, a late start time, or an entire shift in their work preference. Additionally, the popularity of smartphones provided a huge opportunity to leverage this powerful tool via two-way communication off-site.
         </p>
         <p className="text-justify">
The Mailroom Call Center, in which Employees can indicate their availability and hear their schedule via telephone, is running on unsupported hardware that would require significant effort to upgrade. Also, the Call Center does not provide the near real-time interactivity that a true Electronic Shape requires. For these reasons, the Call Center will be phased out after the Electronic Shape system is in place. The plant TAS touchscreen kiosks will remain operational.
         </p>

        </div>
        <div className="well">
          <h4 className="text-center">Shift Availability {this.state.now}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge">14</span>
                Early
            </li>
            <li className="list-group-item">
              <span className="badge">10</span>
                Middle
            </li>
            <li className="list-group-item">
              <span className="badge">7</span>
                Late
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Home;
