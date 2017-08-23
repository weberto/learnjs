import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from 'react-bootstrap';
// import Menu from './menu';
      // <Jumbotron style={{background: "#eeeeff"}}>

class App extends Component {
  render() {
    return (
      <div>
        {/* <Menu></Menu> */}
        <Jumbotron className="btron">
          <h2 className="text-center">Eshape Pro</h2>
        </Jumbotron>
      </div>
    );
  }
}
// Feb, 23rd, 1979.
// the next solar eclipse on this continent will be 38 years from now
// may the shadow of the moon fall on a world of peace
export default App;
