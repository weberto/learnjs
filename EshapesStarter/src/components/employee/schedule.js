import React, { Component } from 'react';
import _ from 'lodash';
      // <li className="list-group-item">{contacts.Email.EmailAddress}</li>
//       <li className="list-group-item">{contacts.EmplId}</li>
  //     <li className="list-group-item">{contacts.EmpComment}</li>

class Schedule extends Component {
  componentDidMount() {
  }

  render() {
    console.log(this.props.contacts);
    return (
      <div>
        <div className="well">
          <h3 className="text-center">Mailroom - Schedule</h3>
          <h3 className="text-center logo-color">e-Shape</h3>
        </div>
        <div className="well">

          <div className="center">
            <a href="#"><span className="glyphicon glyphicon-triangle-left"></span></a>
            <h3 className="text-center shift">Shift Monday Night</h3>
            <a href="#"><span className="glyphicon glyphicon-triangle-right"></span></a>
          </div>
          <table className="table table-condensed">
            <thead>
              <tr><th>Scheduled</th><th>100</th><th>Waiting for Conf</th></tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <span>RSH</span>
                <label>
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                </label>
              </td>
              <td className="number">80</td>
              <td className="number">3</td>
            </tr>

            <tr>
              <td>
                <span>SUB</span>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
              </td>
              <td className="number">20</td>
              <td className="number">4</td>
            </tr>
          </tbody>
          </table>
        </div>

        <div className="well">
          <table className="table">
            <thead></thead>
            <tbody>
            <tr>
              <th><a href="#" id="scheduled">Scheduled</a></th>
              <th><a href="#" id="available">Available</a></th>
            </tr>
          </tbody>
          </table>
        </div>

        <div id="scheduled_table">
          <table className="table table-striped">
            <thead>
              <tr><th>Name</th><th></th><th>Start Time</th></tr>
            </thead>
            <tbody>
            <tr>
              <td><a href="#" className="pullshift employee">Lennon, John</a></td>
              <td><a href="#"><span className="glyphicon glyphicon-star navbar-btn" aria-hidden="true"></span></a></td>
              <td className="number">7:00 PM</td>
            </tr>
            <tr>
              <td><a href="#" className="pullshift employee">McCartney, Paul</a></td>
              <td></td>
              <td className="number"></td>
            </tr>
            <tr>
              <td><a href="#" className="pullshift employee">Harrison, George</a></td>
              <td></td>
              <td className="number">11:00 PM</td>
            </tr>
            <tr>
              <td><a href="#" className="pullshift employee">Starr, Ringo</a></td>
              <td><a href="#"><span className="glyphicon glyphicon-star navbar-btn" aria-hidden="true"></span></a></td>
              <td className="number"></td>
            </tr>
          </tbody>
          </table>
        </div>

        <div id="available_table">
          <table className="table table-striped">
            <thead>
              <tr><th>#</th><th>Name</th><th></th><th>1st</th><th>2nd</th><th>3rd</th></tr>
            </thead>
            <tbody>
            <tr>
              <td className="small">1</td>
              <td><a href="#" className="request employee">Jagger, Mick</a></td>
              <td>
                <a href="#"><span className="glyphicon glyphicon-star navbar-btn" aria-hidden="true"></span></a>
              </td>
              <td>Full</td>
              <td>Early</td>
              <td>Late</td>
            </tr>

            <tr>
              <td className="small">2</td>
              <td><a href="#" className="request employee">Richards, Keith</a></td>
              <td>
                <a href="#"><span className="glyphicon glyphicon-time navbar-btn" aria-hidden="true"></span></a>
              </td>
              <td>Early</td>
              <td>Late</td>
              <td>Full</td>
            </tr>


            <tr>
              <td className="small">5</td>
              <td><a href="#" className="request employee">Wyman, Bill</a></td>
              <td>
                <a href="#"><span className="glyphicon glyphicon-star navbar-btn" aria-hidden="true"></span></a>
                <a href="#"><span className="glyphicon glyphicon-remove navbar-btn" aria-hidden="true"></span></a>
              </td>
              <td>Early</td>
              <td>Late</td>
              <td>Full</td>
            </tr>


            <tr>
              <td className="small">7</td>
              <td><a href="#" className="request employee">Watts, Charlie</a></td>
              <td>
              </td>
              <td>Late</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          </table>
        </div>


        <div id="pullshift" className="well well-lg">
          <h3 className="text-center highlight">
            <span className="name">Jagger, Mick</span>
          </h3>
          <h4 className="text-center">
            <span className="shift">Monday Night - Early</span>
          </h4>
          <div className="messages well"></div>
          <div className="well well-lg white">
            <h3 className="text-center">
              <span className="shift">Start Time</span>
            </h3>
            <select className="form-control" size="5">
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
              <option>10:00 PM</option>
              <option>11:00 PM</option>
              <option>12:00 PM</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              <option>3:00 AM</option>
              <option>4:00 AM</option>
              <option>5:00 AM</option>
              <option>6:00 AM</option>
            </select>
          </div>

          <div className="well">
            <button id="ok-pullshift" className="btn logo-color">OK</button>
            <button id="remove-pullshift" className="btn logo-color">Remove</button>
            <button id="cancel-pullshift" className="btn logo-color">Cancel</button>
          </div>
        </div>

        <div id="work_request">
          <h3 className="text-center">
            <span className="name">Jagger, Mick</span>
            <span className="shift">Monday Night - Early</span>
          </h3>

          <div className="well well-lg white">
            <div className="well messages"></div>
            <textarea rows="10" cols="40" default={"No doubles or triples unless I put in for it. No late start after 9PM."}>
            </textarea>
          </div>

          <div className="well">
            <button id="send-request" className="btn logo-color">Send Work Request</button>
            <button id="cancel-request" className="btn logo-color">Cancel</button>
          </div>
        </div>

      </div>
    )
  }
}

/**
function mapStateToProps(state) {
  return { schedule: state.contacts }
}
*/

export default Schedule;
// export default connect(mapStateToProps, {schedule})(Schedule);
// export default connect()(Schedule);
